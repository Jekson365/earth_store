import { Box, Dialog, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useCategories } from "../../../../hooks/categories/useCategories";
import { useUpdateProduct } from "../../../../hooks/products/useUpdateProduct";
import { CustomError } from "../../../../components/CustomError";
import { useTranslation } from "react-i18next";

export const ProductPopUp = ({ open, setOpen, product }: any) => {
  const { categories, fetchCategories } = useCategories();
  const { updateProduct } = useUpdateProduct();
  const [errorOpen, setErrorOpen] = useState(false);
  const { t } = useTranslation()
  const [prodParams, setProdParams] = useState<any>({
    category_id: "",
    description: "",
    id: product.id,
    price: "",
    sale_price: "",
    title: "",
    amount:""
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleProdUpdate = () => {
    updateProduct(prodParams);
    setErrorOpen(true);
  };

  useEffect(() => {
    if (product) {
      setProdParams({
        category_id: product.category ? product.category.id : '',
        description: product.description,
        id: product.id,
        price: product.price,
        sale_price: product.sale_price,
        title: product.title,
        amount: product.amount
      });
    }
    fetchCategories();
  }, [product]);

  return (
    <>
      <CustomError
        open={errorOpen}
        setOpen={setErrorOpen}
        message="Product Updated"
        severity="success"
      />
      <Dialog onClose={handleClose} open={open}>
        <Box p={2} minWidth={"500px"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <input
                type="text"
                value={prodParams.title}
                placeholder={t('admin.title')}
                onChange={(e: any) =>
                  setProdParams({ ...prodParams, title: e.target.value })
                }
                className="custom-input"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="number"
                value={prodParams.amount}
                placeholder={t('admin.amount')}
                onChange={(e: any) =>
                  setProdParams({ ...prodParams, amount: e.target.value })
                }
                className="custom-input"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="text"
                value={prodParams.description}
                placeholder={t('admin.description')}
                onChange={(e: any) =>
                  setProdParams({ ...prodParams, description: e.target.value })
                }
                className="custom-input"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="number"
                value={prodParams.price}
                placeholder={t('admin.price')}
                onChange={(e: any) =>
                  setProdParams({ ...prodParams, price: e.target.value })
                }
                className="custom-input"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="number"
                value={prodParams.sale_price}
                placeholder={t('admin.sale_price')}
                onChange={(e: any) =>
                  setProdParams({ ...prodParams, sale_price: e.target.value })
                }
                className="custom-input"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <select
                className="custom-input"
                style={{ width: "100%" }}
                value={prodParams.category_id}
                onChange={(e: any) =>
                  setProdParams({
                    ...prodParams,
                    category_id: e.target.value,
                  })
                }
              >
                <option value="">
                  {product.category ? product.category.name : t('admin.select_category')}
                </option>
                {categories &&
                  categories
                    .filter((cat: any) => cat.id !== prodParams.category_id)
                    .map((cat: any) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
              </select>
            </Grid>
          </Grid>
          <Box mt={2}>
            <button onClick={handleProdUpdate} className="admin-button">
              {t('admin.save')}
            </button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};
