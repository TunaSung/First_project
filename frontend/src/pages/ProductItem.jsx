import { useState, useEffect, useMemo } from "react";
import { FaPlus, FaMinus, FaTruck, FaShieldAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Btn from "../components/UI/Btn";
import { productById } from "../service/productService";
import { addToCart } from "../service/cartService";
import "ldrs/dotStream";

function ProductItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(1);
  const [adding, setAdding] = useState(false);

  // 判斷是否登入（初始快取一次即可）
  const isAuthenticated = useMemo(() => !!localStorage.getItem("token"), []);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await productById(id);
        if (alive) setProduct(data.product);
      } catch (err) {
        console.error("獲取商品詳情失敗：", err);
      }
    })();
    return () => {
      alive = false;
    };
  }, [id]);

  const handleStep = (delta) => {
    setAmount((a) => Math.max(1, a + delta));
  };

  async function ensureLoginThen(fn) {
    if (!isAuthenticated) {
      alert("Login first!");
      navigate("/sign-in");
      return;
    }
    await fn();
  }

  const handleAddToCart = async (redirectTo) => {
    if (adding) return; // 避免連點
    await ensureLoginThen(async () => {
      try {
        setAdding(true);
        await addToCart(id, amount);
        if (redirectTo === "cart") {
          navigate("/cart");
        } else {
          alert("商品已加入購物車！");
        }
      } catch (err) {
        console.error("加入購物車失敗：", err);
        alert("加入購物車失敗，請稍後再試");
      } finally {
        setAdding(false);
      }
    });
  };

  const defaultImg = "/images/imgExample.webp";

  const formattedPrice = useMemo(() => {
    if (!product?.price && product?.price !== 0) return "";
    try {
      return new Intl.NumberFormat("zh-TW", {
        style: "currency",
        currency: "TWD",
        maximumFractionDigits: 0,
      }).format(Number(product.price));
    } catch {
      return product.price;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="w-full py-24 flex justify-center">
        <l-dot-stream size="64" speed="2.2" color="black" />
      </div>
    );
  }

  return (
    <div
      id="product-item"
      className="bg-[var(--secondary-color)] text-[var(--primary-color)]"
    >
      {/* Main container */}
      <div className="mx-auto w-[75%] max-lg:w-[90%] max-md:w-[96%] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* start image */}
          <div className="bg-[var(--tertiary-color)] rounded-2xl p-4 flex items-center justify-center">
            <img
              src={product.image || defaultImg}
              onError={(e) => (e.currentTarget.src = defaultImg)}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-xl"
              loading="eager"
            />
          </div>
          {/* end image */}

          {/* start info */}
          <aside className="flex flex-col gap-5 lg:sticky lg:top-8">
            {/* start name & price */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-1">
                {product.name}
              </h1>
              <p className="text-red-600 text-2xl lg:text-3xl font-semibold">
                {formattedPrice}
              </p>
            {/* end name & price */}
            </div>

            {/* start quantity */}
            <div className="space-y-2">
              <label
                htmlFor="qty-stepper"
                className="block text-sm font-medium text-slate-700"
              >
                Quantity
              </label>
              <div
                id="qty-stepper"
                className="grid grid-cols-[1fr_2fr_1fr] w-30 items-stretch overflow-hidden rounded-lg border border-slate-300 bg-white text-slate-800"
              >
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => handleStep(-1)}
                  className="flex items-center justify-center hover:bg-slate-50 active:scale-[0.98] transition"
                >
                  <FaMinus />
                </button>
                <div
                  className="flex items-center justify-center font-semibold select-none"
                  aria-live="polite"
                >
                  {amount}
                </div>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => handleStep(1)}
                  className="flex items-center justify-center hover:bg-slate-50 active:scale-[0.98] transition"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            {/* end quantity */}

            {/* start actions */}
            <div className="flex flex-wrap gap-3">
              <Btn
                onClick={() => handleAddToCart()}
                text={adding ? "Adding..." : "Add To Cart"}
              />
              <Btn
                onClick={() => handleAddToCart("cart")}
                text="Buy It Now"
              />
            </div>
            {/* end actions */}

            {/* start guarantees */}
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2">
                <FaTruck className="shrink-0" />
                <span>Local fast shipping</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <FaShieldAlt className="shrink-0" />
                <span>Secure payment & warranty</span>
              </div>
            </div>
            {/* end guarantees */}
          </aside>
          {/* end info */}
        </div>

        {/* start description */}
        <section className="mt-10">
          <div className="rounded-2xl border border-slate-200 bg-[var(--primary-color)]/60 p-6 leading-7 text-slate-800">
            {product.description}
          </div>
        </section>
        {/* end description */}
      </div>
    </div>
  );
}

export default ProductItem;
