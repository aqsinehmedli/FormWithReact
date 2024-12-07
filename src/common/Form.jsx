import { useState } from 'react';
import FormItem from '.common/formItem';

const Form = ({formInputs,formButton,formStyle,image,handleInputChange,containerStyle = ''}) => {
    const [formData,setFormData] = useState({})
    
    const handleInputChange = (name,value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]:value

        }))
    }

    return(
        <div className={`${containerStyle} flex ${image?.position === "left" ? "flex" : "flex-row-reverse"}`}>
            {image && <img className={image.style} src={image.url}/>}
            <form className={formStyle} action="">
                {formInputs.map(item => <FormItem label={item.label} handleInputChange={handleInputChange} name={item.name} type={item.type} placeholder={item.placeholder}/>)}

                {formButton.map(button => <button className={button.style} onClick={button.action}>{button.title}</button>)}
            </form>
        </div>
    )
}
export default Form