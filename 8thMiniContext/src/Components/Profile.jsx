import React, {useContext} from 'react'
import UserContext from '../Context/ContextUser'

function Profile() {

    const {user} = useContext(UserContext)

    if (!user) return <div>Please login</div>

    return <div>Welcome! Happy login {user.username}</div>
}

export default Profile
