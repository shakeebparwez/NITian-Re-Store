import React from 'react'
import { Modal } from "antd";

function ProductsForm({
  showProductForm,
  setShowProductForm,
}) {
  return (
    <Modal title=""
    open={showProductForm}
    onCancel={() => setShowProductForm(false)}
    centered>
      <h1>Products Form</h1>
    </Modal>
  )
}

export default ProductsForm