import { Button } from "antd";

export default function MyButtonModal(props) {
    return (
        <Button type="default" color='default' variant='outlined' className='my-button-modal' onClick={props.onClick}>{props.content}</Button>
    )
}