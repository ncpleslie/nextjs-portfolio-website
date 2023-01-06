import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { LinkType } from '../../enums/link-type.enum'
import Project from '../../models/project.model'
import TechnologyPill from '../ProjectCard/TechnologyPill'
import Button from './Button'
import DividerLine from './DividerLine'

interface ExternalProjectModalProps {
  project?: Project
  onClose: () => void
}

const ExternalProjectModal: React.FC<ExternalProjectModalProps> = ({
  project,
  onClose,
}) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
    onClose()
  }

  useEffect(() => {
    if (project) {
      setIsOpen(true)
    }
  }, [project])

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center justify-center text-center md:p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="m-2 h-full w-full transform overflow-hidden rounded-2xl border-2 border-accent2 bg-skin-fill  text-left align-middle shadow-xl transition-all md:m-8 md:p-6">
                  <div className="flex flex-row items-center justify-between p-2 md:p-0">
                    <Dialog.Title as="h2" className="fancy mb-4">
                      {project.title}
                    </Dialog.Title>
                    <button
                      onClick={closeModal}
                      className="mb-4 h-8 w-8 -space-y-[0.1rem]"
                    >
                      <div className="h-0.5 w-8 -rotate-45 bg-accent1"></div>
                      <div className="h-0.5 w-8 rotate-45 bg-accent1"></div>
                    </button>
                  </div>
                  <div className="h-full w-full overflow-y-auto p-1 md:p-0">
                    <iframe
                      className="h-4/6 w-full rounded-2xl border-2 border-accent1 bg-white"
                      src={project.projectUrl}
                    ></iframe>
                    <div className="my-4">
                      <p>{project.description}</p>
                    </div>
                    <DividerLine />
                    <div className="flex flex-row flex-wrap justify-center leading-[2] sm:p-4">
                      {project.technologies.map((tech: string) => (
                        <TechnologyPill key={tech} tech={tech} />
                      ))}
                    </div>
                    <DividerLine />
                    <div className="mt-4 flex flex-row items-center justify-center gap-8">
                      <Button
                        className="inverted w-16"
                        disabled={!Boolean(project.githubUrl)}
                        url={project.githubUrl}
                        type={LinkType.Github}
                        title="Github"
                      />
                      <Button
                        className="inverted w-16"
                        disabled={!Boolean(project.projectUrl)}
                        url={`${project.projectUrl}`}
                        type={LinkType.Project}
                        title="see this project"
                      />

                      <button
                        type="button"
                        className="btn flex w-16 items-center justify-center"
                        onClick={closeModal}
                      >
                        <div className="mt-4 h-4 w-8 -space-y-[0.1rem]">
                          <div className="h-0.5 w-8 -rotate-45 bg-white"></div>
                          <div className="h-0.5 w-8 rotate-45 bg-white"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ExternalProjectModal
