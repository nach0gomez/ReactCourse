import PropTypes from 'prop-types';
import { useState } from 'react';

// declarative code, not imperative (data and render flow control)

// react props must not be modified
export function TwitterFollowCard( { formatUserName, userName, children } ) {
    
    // can also use 'children' as a prop to render children elements

    // Prop types validation for the component
    TwitterFollowCard.propTypes = {
        userName: PropTypes.string.isRequired,
        // isFollowing: PropTypes.bool,
        formatUserName: PropTypes.func.isRequired,
        children: PropTypes.string,
    };

    // creating status to simulate the following status (default false)
    const [isFollowing, setIsFollowing] = useState(false);
    
    // function to handle the button click
    const handleClick = () => {
      setIsFollowing(!isFollowing);
    };


    // definition of the button text and class based on the isFollowing prop
    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
      ? 'tw-followCard-button is-following' 
      : 'tw-followCard-button';

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
          {/* don't pass the func eval, just the func itself so it can eval it when needed */}
          <button className={buttonClassName}  onClick={handleClick}>
            {buttonText}
          </button>
        </aside>
      </article>
    );
  }
  