import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/ActionList/Divider/Divider',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oMiRuexZW6gqVbMhQd6lwP/Storybook?node-id=2%3A2'
    }
  },
  argTypes: {
    variant: {
      options: [0, 1], // iterator
      mapping: ['', 'ActionList-sectionDivider--filled'], // values
      control: {
        type: 'select',
        labels: ['subtle', 'filled']
      },
      defaultValue: ''
    },
    title: {
      defaultValue: '',
      type: 'string',
      name: 'title',
      description: 'string'
    },
    description: {
      defaultValue: '',
      type: 'string',
      name: 'description',
      description: 'string'
    }
  }
  //   decorators: [
  //     Story => (
  //       <div style={{margin: '3em', border: 'dashed 1px var(--color-scale-gray-3)'}}>
  //         <ul className="ActionList" role="menu">
  //           <Story />
  //         </ul>
  //       </div>
  //     )
  //   ]
}

const Template = ({title, description, variant}) => (
  <>
    <li
      className={clsx(
        !!title && 'ActionList-sectionHeader',
        !title && 'ActionList-sectionDivider',
        variant && `${variant}`
      )}
      role={title ? null : 'separator'}
    >
      {title}
      {description && <span className="ActionList-sectionHeader--description">{description}</span>}
    </li>
  </>
)

export const Divider = Template.bind({})
Divider.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]
