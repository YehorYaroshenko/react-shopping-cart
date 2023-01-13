function ButtonDelete({ deleteProduct, id }) {
  return (
    <button type="button">
      <img
        src="./images/icons/icon-x.svg"
        alt="delete"
        onClick={() => {
          deleteProduct(id)
        }}
      />
    </button>
  )
}

export default ButtonDelete
