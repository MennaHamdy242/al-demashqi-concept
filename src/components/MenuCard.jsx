import "./MenuCard.css";

function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <h3 className="menu-card-name-ar">{item.nameAr}</h3>
      {/* النص الإنجليزي ثانوي، وبنحط dir="ltr" عشان يتكتب صح جوا صفحة RTL */}
      <p className="menu-card-name-en" dir="ltr">
        {item.name}
      </p>

      <ul className="menu-card-sizes">
        {item.sizes.map((size, index) => (
          <li key={index} className="size-pill">
            {size.label && <span className="size-label">{size.label}</span>}
            <span className="size-price" dir="ltr">
              {size.price} جنيه
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default MenuCard;