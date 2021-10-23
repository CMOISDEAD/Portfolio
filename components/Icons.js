const Icons = ({ icon, name }) => {
  return ( 
    <>
    <i aria-hidden className={`${icon}`}>
      <span className="lang-info">{name}</span>
    </i>
    <style jsx>
      {`
        i {
          font-size: 1.8rem;
          margin: 0 1vw 10px 1vw;
        }
        .lang-info {
          display: none;
          transition: all 0.5s ease;
          margin: 0;
        }
        i:hover > * {
          display: block;
          position: absolute;
        }
        i:hover {
          color: #689d6a;
        }
        .sign:hover,
        .lang-info {
          color: #689d6a;
          text-decoration: underline #689d6a;
        }
      `}
    </style>
    </>
  )
}

export default Icons
