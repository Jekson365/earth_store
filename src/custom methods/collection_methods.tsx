export const setItems = (products: any, loading: Boolean) => {
    let result: any = []
    if (!loading) {
        products.map((item: any) => {
            item.product_images.map((e: any) => {
                if (result.length <= 4) {
                    let isCatIn = result.find((cat: any) => cat.category_id == item.category.id)
                    if (!isCatIn) {
                        result = [...result, {
                            category_id: item.category.id,
                            image: e.image.url,
                            cat_name: item.category.name,
                            description: item.category.description }]
                    }
                }
            })
        })
    }
    return result
}