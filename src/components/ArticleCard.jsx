import React from 'react'
import { Popconfirm } from 'antd'
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'

export default function articleCard(props) {
  return (
    <div className='card'>
      <h3 className='card-title'>{props.title}</h3>

      <div className='card-actions'>
        <EditOutlined onClick={() => props.handleEdit(props.id)} />
        <Popconfirm
          title="Êtes-vous sûr de vouloir supprimer cet article ?"
          onConfirm={() => props.handleDelete(props.id)}
          okText="Oui"
          cancelText="Non"
        >
          <DeleteOutlined/>
        </Popconfirm>
        <EyeOutlined onClick={() => props.handleComment(props.id)} />
      </div>
    </div>
  )
}