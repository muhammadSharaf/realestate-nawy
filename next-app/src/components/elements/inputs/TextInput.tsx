import React from "react";

interface TextInput {
    name: string,
    label: string;
    placeholder?: string;
    required?: boolean
}

const TextInput: React.FC<TextInput> = ({name, label, placeholder, required= true}) => {
    return (
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input type="text" id={name} name={name}
                   className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   placeholder={placeholder} required={required}/>
        </div>
    );
};

export default TextInput;
