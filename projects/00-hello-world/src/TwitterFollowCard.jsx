import PropTypes from 'prop-types';

// react props must not be modified
export function TwitterFollowCard( { formatUserName, userName, children, isFollowing } ) {
    
    // can also use 'children' as a prop to render children elements

    // Prop types validation for the component
    TwitterFollowCard.propTypes = {
        userName: PropTypes.string.isRequired,
        isFollowing: PropTypes.bool,
        formatUserName: PropTypes.func.isRequired
    };

    // img url definition
    const imgUrl = `https://unavatar.io/${userName}`;

    return (
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-img"
            src={imgUrl}
            alt="example avatar"
          />
            <div className="tw-followCard-info">
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
          </div>
        </header>
        <aside>
          <button className="tw-followCard-button">Seguir</button>
        </aside>
      </article>
    );
  }
  