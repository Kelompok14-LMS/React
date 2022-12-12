import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useGetCategoriesQuery } from "../../store/features/courses/categorySlice";

export default function EditCourse({
  title,
  categoryId,
  description,
  onTitleChange,
  onCategoryIdChange,
  onDescriptionChange,
  setToggleEdit,
  setPreviewThumbnail,
  setTitle,
  setCategoryId,
  setDescription,
  isSuccess,
  detailCourse,
}) {
  const { data: getCategories } = useGetCategoriesQuery();

  const handleCancel = () => {
    setToggleEdit(false);
    setPreviewThumbnail();
  };

  // set state for edit
  useEffect(() => {
    if (isSuccess) {
      setTitle(detailCourse?.title);
      setCategoryId(detailCourse?.category_id);
      setDescription(detailCourse?.description);
    }
  }, [
    detailCourse?.category_id,
    detailCourse?.description,
    detailCourse?.title,
    isSuccess,
    setCategoryId,
    setDescription,
    setTitle,
  ]);

  return (
    <>
      <div className="text-end">
        <Button variant="outline-warning" onClick={() => handleCancel()}>
          Cancel
        </Button>
      </div>
      <Form.Group className="mb-3">
        <Form.Label>Judul Course</Form.Label>
        <Form.Control type="text" placeholder="Klik disini" value={title} onChange={onTitleChange} />
      </Form.Group>

      <Form.Label>Kategori</Form.Label>
      <Form.Select value={categoryId} onChange={onCategoryIdChange}>
        <option>Pilih disini</option>
        {getCategories?.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </Form.Select>

      <Form.Group className="mt-3 mb-4">
        <Form.Label>Deskripsi</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Klik disini"
          value={description}
          rows={7}
          onChange={onDescriptionChange}
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="warning w-50" type="submit">
          Simpan perubahan
        </Button>
      </div>
    </>
  );
}
