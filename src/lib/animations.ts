export function animateAddToCart(e: React.MouseEvent, imageSrc: string) {
  const startX = e.clientX;
  const startY = e.clientY;

  const cartIcon = document.getElementById('header-cart-icon');
  if (!cartIcon) return;

  const cartRect = cartIcon.getBoundingClientRect();
  const endX = cartRect.left + cartRect.width / 2;
  const endY = cartRect.top + cartRect.height / 2;

  const img = document.createElement('img');
  img.src = imageSrc;
  img.style.position = 'fixed';
  img.style.left = `${startX - 50}px`;
  img.style.top = `${startY - 50}px`;
  img.style.width = '100px';
  img.style.height = '100px';
  img.style.objectFit = 'cover';
  img.style.borderRadius = '50%';
  img.style.zIndex = '99999';
  img.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
  img.style.pointerEvents = 'none';
  img.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';

  document.body.appendChild(img);

  // Trigger reflow
  void img.offsetWidth;

  // Move to cart
  img.style.left = `${endX - 10}px`;
  img.style.top = `${endY - 10}px`;
  img.style.width = '20px';
  img.style.height = '20px';
  img.style.opacity = '0.2';

  setTimeout(() => {
    img.remove();
    // Dispatch custom event to bump cart
    window.dispatchEvent(new CustomEvent('cart-bump'));
  }, 800);
}

export function animateToWishlist(e: React.MouseEvent, imageSrc: string) {
  const startX = e.clientX;
  const startY = e.clientY;

  const wishlistIcon = document.getElementById('header-wishlist-icon');
  if (!wishlistIcon) return;

  const rect = wishlistIcon.getBoundingClientRect();
  const endX = rect.left + rect.width / 2;
  const endY = rect.top + rect.height / 2;

  const img = document.createElement('img');
  img.src = imageSrc;
  img.style.position = 'fixed';
  img.style.left = `${startX - 50}px`;
  img.style.top = `${startY - 50}px`;
  img.style.width = '100px';
  img.style.height = '100px';
  img.style.objectFit = 'cover';
  img.style.borderRadius = '50%';
  img.style.zIndex = '99999';
  img.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
  img.style.pointerEvents = 'none';
  img.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';

  document.body.appendChild(img);

  // Trigger reflow
  void img.offsetWidth;

  // Move to wishlist
  img.style.left = `${endX - 10}px`;
  img.style.top = `${endY - 10}px`;
  img.style.width = '20px';
  img.style.height = '20px';
  img.style.opacity = '0.2';

  setTimeout(() => {
    img.remove();
    window.dispatchEvent(new CustomEvent('wishlist-bump'));
  }, 800);
}
