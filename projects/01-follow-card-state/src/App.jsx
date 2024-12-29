import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const formatUserName = (username) => `@${username}`

  // Could also use an element like <span> to format the username directly and send it to the component
  // since react renders elements. The components -> elements and react -> elements

  // Mocking API results
  const usersAPI = [
    {
      id: 1,
      userName: 'nach0gomez',
      name: 'Ignacio Gómez',
      isFollowing: true
    },
    {
      id: 2,
      userName: 'kikobeats',
      name: 'kikobeats',
      isFollowing: false
    },
    {
      id: 3,
      userName: 'test',
      name: 'Test',
      isFollowing: false
    }
  ]

  return (
    <section className='tw-followCardContainer'>
      {usersAPI.map((user) => {
        //* we could also destructure the object to use the properties directly
        // const { id, userName, name, isFollowing } = user

        return (
          <TwitterFollowCard
            key={user.id}
            formatUserName={formatUserName}
            initialIsFollowing={user.isFollowing}
            userName={user.userName}
          >
            {user.name}
          </TwitterFollowCard>
        )
      })}

      {/* <TwitterFollowCard
        formatUserName={formatUserName}
        userName="test2"
        isFollowing
      >test2</TwitterFollowCard>
      */}
    </section>
  )
}
