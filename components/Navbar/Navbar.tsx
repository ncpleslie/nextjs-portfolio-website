import React, { FC, useEffect, useRef, useState } from 'react'
import { LinkType } from '../../enums/link-type.enum'
import Button from '../UI/Button'
import classes from './Navbar.module.css'
import { gsap, Power1 } from 'gsap'
import NavMenu from './NavMenu'
import DividerLine from '../UI/DividerLine'
import Link from 'next/link'
import NavbarLink from '../../models/link.model'
import useIsMobile from '../../hooks/use_is_mobile'

export interface NavbarProps {
  links: NavbarLink[]
  name: string
}

const Navbar: FC<NavbarProps> = ({ links, name }) => {
  const [isScrolledTo, setIsScrolledTo] = useState(false)
  const navbarRef = useRef<HTMLElement>(null)
  const buttonsRef = useRef<HTMLElement[]>([])
  let navbarYLocation = 0
  const triggerOffset = 50
  const [boxes, setBoxes] = useState<
    { x: number; y: number; button: HTMLElement }[]
  >([])
  const ease = Power1.easeInOut
  const isMobile = useIsMobile()

  const hideNav = () => {
    setIsScrolledTo(window.scrollY > navbarYLocation)
  }

  useEffect(() => {
    if (isMobile) {
      return
    }

    if (isScrolledTo) {
      // Animation for scrolling down.
      boxes.forEach((box) => {
        const lastX = box.x

        const x = lastX - box.button?.offsetLeft
        const y = box.button?.offsetTop + 20

        // Tween to 0 to remove the transforms
        gsap.fromTo(
          box.button,
          { duration: 0.2, x, y, ease },
          { duration: 0.2, x: 0, y: 0, ease }
        )
      })

      return
    }

    // Animation for scrolling up
    boxes.forEach((box) => {
      const x = box.button?.offsetLeft - 100
      const y = 0

      // Tween to 0 to remove the transforms
      gsap.fromTo(
        box.button,
        { duration: 0.2, x, y, ease },
        { duration: 0.2, x: 0, y: 0, ease }
      )
    })
  }, [isScrolledTo, ease, boxes])

  useEffect(() => {
    buttonsRef?.current?.forEach((button) => {
      setBoxes((prev) => {
        prev.push({
          x: button?.offsetLeft,
          y: button?.offsetTop,
          button,
        })
        return prev
      })
    })
  }, [buttonsRef])

  useEffect(() => {
    navbarYLocation = navbarRef?.current?.offsetTop + triggerOffset
  }, [navbarRef])

  useEffect(() => {
    window.addEventListener('scroll', hideNav)

    return () => {
      window.removeEventListener('scroll', hideNav)
    }
  }, [])

  return (
    <nav
      ref={navbarRef}
      className={isScrolledTo ? classes.navbarTop : classes.navbarJumbotron}
    >
      <Link href={'/'}>
        <a
          className={
            isScrolledTo
              ? classes.navbarTopHeader
              : classes.navbarJumbotronHeader
          }
        >
          {name}
        </a>
      </Link>
      <Link href={'/'}>
        <a
          className={
            isScrolledTo
              ? classes.navbarTopHeaderInitials
              : classes.navbarJumbotronHeader
          }
        >
          NL
        </a>
      </Link>
      <div className={isScrolledTo ? classes.navbarTopProjectBtn : ''}>
        <Button
          className={isScrolledTo ? 'w-52 py-2' : 'w-64'}
          url="#projects"
          title="See Project"
        >
          See Projects
        </Button>
      </div>
      <NavMenu
        className={isScrolledTo ? classes.navbarTopHamburger : 'hidden'}
        links={links}
      />
      <div
        className={
          isScrolledTo ? classes.navbarTopBtnBar : classes.navbarJumbotronBtnBar
        }
      >
        {links &&
          links.map((link) => (
            <div
              ref={(el) => buttonsRef.current.push(el)}
              className="h-full"
              key={link.url}
            >
              <Button
                className="inverted"
                type={link.type}
                url={link.url}
                title={link.title}
              />
            </div>
          ))}
        <div ref={(el) => buttonsRef.current.push(el)} className="h-full">
          <Button
            className="inverted"
            type={LinkType.Contact}
            url="#contact"
            title="Contact Me"
          />
        </div>
      </div>
      {isScrolledTo && (
        <DividerLine className="absolute bottom-0 w-screen" fancy />
      )}
    </nav>
  )
}

export default Navbar
