import clsx from 'clsx';

const Note = ({ note, handleUpdate, handleDelete }) => {
    const { id, content, important } = note

    const checkClass = clsx('bi bi-check-square-fill', {
        'text-warning': important
    })

    return (
        <li>
            <div className="d-flex align-items-center mx-2">
                {content}
                <button
                    className='border-0 mx-2'
                    onClick={() => handleUpdate(id)}>
                    <i className={checkClass}></i>
                </button>
                <button
                    className='btn btn-sm m-2'
                    onClick={() => handleDelete(id)}
                >
                    <i className="bi bi-x-square bg-warning"></i>
                </button>
            </div>
        </li>
    )
}

export default Note
