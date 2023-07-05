

const Error = ({ msg }) => {
    return (
        <div class="alert alert-danger" role="alert">
           <strong>Error: </strong>
           {msg}
        </div>
    )
}

export default Error