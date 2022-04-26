import { render, screen } from '@testing-library/react';
import Home from './Home';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}


describe('Home', () => {
  
  it('Should render the user profile', async () => {
    render(
      <Home user={user}/>
    );
    screen.debug();

    const profileName = screen.getByText(`${user.name}`);
    expect(profileName).toBeInTheDocument();

    const motto = screen.getByLabelText('motto');
    expect(motto.textContent).toEqual(user.motto);

    const interests = screen.getByText('Interests');
    expect(interests).toBeInTheDocument();

    const avatar = screen.getByAltText('avatar');
    expect(avatar.src).toEqual(user.avatar);

    const headerImg = screen.getByAltText('header');
    expect(headerImg.src).toEqual(user.header);

    const likes = screen.getByRole('list');
    expect(likes.childElementCount).toEqual(user.likes.length);
})

})
