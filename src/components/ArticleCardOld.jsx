import React from 'react'
import { Card, Popconfirm } from 'antd'
import { DeleteOutlined, EditOutlined, CommentOutlined } from '@ant-design/icons'

export default function articleCard(props) {
  return (
    <Card
      title={props.title}
      bordered={false}
      className='card'
      style={{ width: 300 }}
      actions={[
        <EditOutlined onClick={() => props.handleEdit(props.id)} />,
        <Popconfirm
          title="Êtes-vous sûr de vouloir supprimer cet article ?"
          onConfirm={() => props.handleDelete(props.id)}
          okText="Oui"
          cancelText="Non"
        >
          <DeleteOutlined/>
        </Popconfirm>,
        <CommentOutlined onClick={() => props.handleComment(props.id)} />
      ]}
    >
      <p>{props.content}</p>
    </Card>
  )
}