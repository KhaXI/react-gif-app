import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        const newInputValue = inputValue.trim().toUpperCase()
        event.preventDefault()
        if (newInputValue.length <= 1) return
        // setCategories(categories => [inputValue, ...categories])
        setInputValue('')
        onNewCategory(newInputValue)
    }

    return (
        <form onSubmit={onSubmit}>
            {/* <form onSubmit={(event) => onSubmit(event)}> esta linea es igual a la 19 */}
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event => onInputChange(event))}
            // onChange={onInputChange}     esta linea es equivalente a la linea 16
            />
        </form>
    )
}
