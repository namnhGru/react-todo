export default function SettingModal(props) {
    return (
        <ul>
            <li>
                <p>Save on each update</p>
                <p>Toggle store data even after refresh</p>
                <input type="checkbox" onChange={props.handleSoeChange} checked={props.soe}/>
            </li>
        </ul> 
    )
}