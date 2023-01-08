import { FC } from 'react'
import StyleProps from '../../props/style.props'
import { Menu } from '@headlessui/react'
import NavbarLink from '../../models/link.model'
import Button from '../UI/Button'
import StaggeredTransition from '../Transitions/Staggered'
import { LinkType } from '../../enums/link-type.enum'

interface NavMenuProps {
  links: NavbarLink[]
}

const NavMenu: FC<NavMenuProps & StyleProps> = ({ className, links }) => {
  return (
    <div className={`fixed z-10 ${className}`}>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              as="button"
              className={`mr-2 ${
                open ? '-space-y-[0.1rem] pt-2' : 'space-y-2'
              }`}
            >
              <div
                className={`h-0.5 w-8 bg-gray-600 ${
                  open && 'rotate-45'
                } transition duration-200`}
              ></div>
              <div
                className={`h-0.5 w-8 bg-gray-600 ${
                  open && 'translate-x-20'
                } transition duration-200`}
              ></div>
              <div
                className={`h-0.5 w-8 bg-gray-600 ${
                  open && '-rotate-45'
                } transition duration-200`}
              ></div>
            </Menu.Button>
            <StaggeredTransition>
              <Menu.Items className="absolute right-0 top-16 flex w-12 flex-col gap-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {links.map((link) => (
                  <Menu.Item key={link.url}>
                    <Button
                      className="inverted transition-all hover:scale-105"
                      type={link.type}
                      url={link.url}
                      title={link.title}
                    />
                  </Menu.Item>
                ))}
                <Menu.Item>
                  <Button
                    className="inverted transition-all hover:scale-110"
                    type={LinkType.Contact}
                    url="#contact"
                    title="Contact Me"
                  />
                </Menu.Item>
              </Menu.Items>
            </StaggeredTransition>
          </>
        )}
      </Menu>
    </div>
  )
}

export default NavMenu
