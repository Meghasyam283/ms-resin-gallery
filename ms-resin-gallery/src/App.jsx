import { useState, useRef } from 'react'
import eight_inch_square_frame from "./assets/varamala-8x8-inch-square-frame.jpg";
import ten_inch_square_frame from "./assets/varamala-10x10-inch-hexagon-frame.jpg";
import fifteen_inch_square_frame from "./assets/varamala-15x12-inch-rectangle-frame.jpg";
import sixteen_inch_awards_frame from "./assets/16x20-inch-awards-preservation-frame.jpg";
import alphabetic_key_chain from "./assets/alphabet-keychain.jpg";
import engagement_platter_white from "./assets/resin-engagement-platter-white.jpg";
import engagement_platter_sky_blue from "./assets/resin-engagement-platter-sky-blue.jpg";
import anniversary_pink_floral_frame from "./assets/anniversary-gift-pink-floral-frame.jpg";
import engagement_platter_teal_blue from "./assets/resin-engagement-platter-teal-blue.jpg";
import anniversary_blue_floral_frame from "./assets/anniversary-gift-blue-floral-frame.jpg";
import car_dash_board from "./assets/car-dash-board.jpg";
import './App.css'

const INITIAL_PRODUCTS = [
  {
    id: 1,
    category: "Frames",
    title: "8 × 8 inch Square Frame",
    price: 1599,
    description: "Handcrafted square wooden resin memory frame (8 x 8 inches) with an elevated photo section, featuring naturally dried botanicals sealed under a crystal-clear glossy finish. Personalized with names and dates — perfect for weddings, anniversaries, and timeless keepsakes.",
    image: eight_inch_square_frame,
    emoji: "🌸",
    badge: "Bestseller",
  },
  {
    id: 2,
    category: "Frames",
    title: "10 × 10 inch Hexagon Frame",
    price: 2999,
    description: "Handcrafted hexagon wooden resin memory frame with an elevated photo section, featuring naturally dried botanicals sealed under a crystal-clear glossy finish. Personalized with names and dates — this premium 3D resin piece is perfect for weddings and anniversaries.",
    image: ten_inch_square_frame,
    emoji: "⬡",
    badge: "Popular",
  },
  {
    id: 3,
    category: "Frames",
    title: "15 × 12 inch Rectangle Frame",
    price: 3999,
    description: "Handcrafted rectangle wooden resin memory frame with a 15×12 inch elevated photo section, featuring naturally dried botanicals sealed under a crystal-clear glossy finish. Personalized with names and dates for a premium keepsake.",
    image: fifteen_inch_square_frame,
    emoji: "🖼️",
    badge: "Premium",
  },
  {
    id: 4,
    category: "Frames",
    title: "16 × 20 inch Awards Preservation Frame",
    price: 4999,
    description: "Preserve the certificates of a lifetime's hard work in an unbreakable, forever-lasting resin art frame, beautifully sealed in a 16×20 inch masterpiece. Turn your achievements into timeless memories protected with a crystal-clear, durable finish.",
    image: sixteen_inch_awards_frame,
    emoji: "🏆",
    badge: "Exclusive",
  },
  {
    id: 5,
    category: "Gifts",
    title: "Anniversary Gift Pink Floral Frame",
    price: 1200,
    description: "A beautifully handcrafted circular resin frame featuring preserved florals and the couple's photo, sealed in a glossy finish to cherish their special day forever. Personalized with names and a forever message — an elegant, heartfelt, and timeless wedding gift.",
    image: anniversary_pink_floral_frame,
    emoji: "💑",
    badge: "Heartfelt",
  },
  {
    id: 6,
    category: "Platters",
    title: "Engagement Platter — Teal Blue",
    price: 1800,
    description: "A teal blue resin engagement platter featuring crystal-clear blue waves, real seashells, pearls, and delicate golden accents for a dreamy coastal vibe. Customized with names, date, and calendar detail — beautifully captures the beginning of your forever.",
    image: engagement_platter_teal_blue,
    emoji: "🐚",
    badge: "Coastal",
  },
  {
    id: 7,
    category: "Platters",
    title: "Engagement Platter — Sky Blue",
    price: 1800,
    description: "A sky blue resin engagement platter featuring crystal-clear blue waves, real seashells, pearls, and delicate golden accents for a dreamy coastal vibe. Customized with names, date, and calendar detail.",
    image: engagement_platter_sky_blue,
    emoji: "🌊",
    badge: "Dreamy",
  },
  {
    id: 8,
    category: "Platters",
    title: "Engagement Platter — White",
    price: 1800,
    description: "A white-themed resin engagement platter featuring a crystal-clear white background. Customized with names, date, and calendar detail — this unique keepsake beautifully captures the beginning of your forever.",
    image: engagement_platter_white,
    emoji: "🤍",
    badge: "Elegant",
  },
  {
    id: 9,
    category: "Accessories",
    title: "Resin Alphabetics Keychain",
    price: 100,
    description: "A crystal-clear alphabet resin keychain with subtle floral inclusions, lightweight yet durable — a stylish and meaningful accessory for your keys or bags.",
    image: alphabetic_key_chain,
    emoji: "🔑",
    badge: "Gift Idea",
  },
  {
    id: 10,
    category: "Accessories",
    title: "Car Dashboard — Lord Ganesha",
    price: 100,
    description: "A handcrafted resin Lord Ganesha idol with elegant golden detailing, set on a sturdy base — perfect for your car dashboard to invite positivity, protection, and blessings on every journey.",
    image: car_dash_board,
    emoji: "🙏",
    badge: "Blessings",
  },
    {
    id: 11,
    category: "Gifts",
    title: "Anniversary Gift blue Floral Frame",
    price: 1200,
    description: "A beautifully handcrafted circular resin frame featuring preserved florals and the couple's photo, sealed in a glossy finish to cherish their special day forever. Personalized with names and a forever message — an elegant, heartfelt, and timeless wedding gift.",
    image: anniversary_blue_floral_frame,
    emoji: "💑",
    badge: "Heartfelt",
  },
]

const CATEGORIES = ["All", "Frames", "Gifts", "Platters", "Accessories"]

function ProductCard({ product, onDelete }) {
  return (
    <div className="product-card">
      {product.badge && <span className="badge">{product.badge}</span>}
      <div className="card-image-wrap">
        {product.image ? (
          <img src={product.image} alt={product.title} className="card-image" />
        ) : (
          <div className="card-placeholder">
            <span className="placeholder-emoji">{product.emoji || "✨"}</span>
            <p>No Image</p>
          </div>
        )}
        <div className="card-category-tag">{product.category}</div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-desc">{product.description}</p>
        <div className="card-footer">
          <span className="card-price">₹{product.price.toLocaleString('en-IN')}</span>
          <button className="enquire-btn" onClick={() => window.open('https://wa.me/916302426925?text=Hi! I am interested in ' + encodeURIComponent(product.title), '_blank')}>
            Enquire
          </button>
        </div>
        {onDelete && (
          <button className="delete-btn" onClick={() => onDelete(product.id)} title="Remove product">✕ Remove</button>
        )}
      </div>
    </div>
  )
}

function AddProductModal({ onClose, onAdd }) {
  const [form, setForm] = useState({ title: '', category: 'Frames', price: '', description: '', badge: '', image: null })
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState('')
  const fileRef = useRef()

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setPreview(ev.target.result)
      setForm(f => ({ ...f, image: ev.target.result }))
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = () => {
    if (!form.title.trim()) return setError('Product name is required.')
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0) return setError('Enter a valid price.')
    if (!form.description.trim()) return setError('Description is required.')
    setError('')
    onAdd({ ...form, price: Number(form.price), id: Date.now(), emoji: '✨' })
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Product</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <div className="image-upload-zone" onClick={() => fileRef.current.click()}>
            {preview
              ? <img src={preview} alt="preview" className="upload-preview" />
              : <div className="upload-placeholder"><span>📸</span><p>Click to upload product image</p></div>
            }
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImage} />
          </div>

          <div className="form-grid">
            <div className="form-group full">
              <label>Product Name *</label>
              <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. 8×8 Square Varamala Frame" />
            </div>
            <div className="form-group">
              <label>Category *</label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Price (₹) *</label>
              <input type="number" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} placeholder="e.g. 1599" min="1" />
            </div>
            <div className="form-group">
              <label>Badge Label</label>
              <input value={form.badge} onChange={e => setForm(f => ({ ...f, badge: e.target.value }))} placeholder="e.g. Bestseller, New, etc." />
            </div>
            <div className="form-group full">
              <label>Description *</label>
              <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Describe this product..." rows={4} />
            </div>
          </div>

          {error && <p className="form-error">⚠ {error}</p>}
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="submit-btn" onClick={handleSubmit}>✦ Add Product</button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS)
  const [activeCategory, setActiveCategory] = useState('All')
  const [showModal, setShowModal] = useState(false)
  const [searchQ, setSearchQ] = useState('')

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(searchQ.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQ.toLowerCase())
    return matchCat && matchSearch
  })

  const handleAdd = (product) => {
    setProducts(prev => [product, ...prev])
  }

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-ornament">✦ ✦ ✦</div>
          <h1 className="hero-title">Ms Resin Gallery</h1>
          <p className="hero-sub">Handcrafted Resin Art · Varamala Preservations · Timeless Keepsakes</p>
          <div className="hero-contact">
            <a href="tel:+916302426925">📞 +91 6302426925</a>
            <span>·</span>
            <a href="mailto:meghasyam0414@gmail.com">✉ meghasyam0414@gmail.com</a>
            <span>·</span>
            <a href="https://instagram.com/ms_resin_gallery" target="_blank" rel="noreferrer">📷 @ms_resin_gallery</a>
          </div>
        </div>
      </header>

      {/* Controls */}
      <div className="controls-bar">
        <div className="controls-inner">
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              type="text"
              placeholder="Search products..."
              value={searchQ}
              onChange={e => setSearchQ(e.target.value)}
            />
          </div>
          <div className="category-pills">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`pill ${activeCategory === cat ? 'pill-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >{cat}</button>
            ))}
          </div>
          <button className="add-btn" onClick={() => setShowModal(true)}>
            ✦ Add Product
          </button>
        </div>
      </div>

      {/* Product count */}
      <div className="count-bar">
        <span>{filtered.length} product{filtered.length !== 1 ? 's' : ''} {activeCategory !== 'All' ? `in ${activeCategory}` : ''}</span>
      </div>

      {/* Grid */}
      <main className="catalog">
        {filtered.length === 0
          ? <div className="empty-state"><span>🌸</span><p>No products found.</p></div>
          : filtered.map(product => (
            <ProductCard key={product.id} product={product} onDelete={handleDelete} />
          ))
        }
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-brand">✦ Ms Resin Gallery ✦</p>
        <p>Each piece is uniquely crafted with high-quality materials, precision, and dedicated hours of work.</p>
        <p>We do Varamala preservations, engagement ring platters, keychains, and car dashboards.</p>
        <div className="footer-links">
          <a href="tel:+916302426925">+91 6302426925</a>
          <a href="mailto:meghasyam0414@gmail.com">meghasyam0414@gmail.com</a>
          <a href="https://instagram.com/ms_resin_gallery" target="_blank" rel="noreferrer">@ms_resin_gallery</a>
        </div>
      </footer>

      {showModal && <AddProductModal onClose={() => setShowModal(false)} onAdd={handleAdd} />}
    </div>
  )
}
