const Capsule = ({ capsule }) => {
  const date = new Date(capsule.original_launch);
  return (
    <li>
      <img src={capsule.images[0]} className="h-80 w-80" />
      <h1>{capsule.capsule_serial}</h1>
      <h3>
        {date.toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </h3>
      <p>{capsule.details}</p>
    </li>
  );
};

export default Capsule;
