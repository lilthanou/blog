import { Button } from "antd";

export default function MyButton(props) {
    return (
        <Button type="default" color='default' variant='outlined' className='my-button' onClick={props.onClick}>{props.content}</Button>
    )
}