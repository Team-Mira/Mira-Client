import renderer from 'react-test-renderer'
import NavDrawer from '../components/Drawer'
import { useSession} from "next-auth/react"
import client, {Session} from "next-auth"


jest.mock('next/router', () => ({
  useRouter() {
      return {
          pathname: '',
          push: () => {return true}
      }
  }
}))

jest.mock('next-auth/react')

test('renders NavDrawer before login like snapshot', async () => {

    (useSession as jest.Mock).mockReturnValue([false, false])
    const component = renderer.create(<NavDrawer/>)
    let tree = component.toJSON()
    expect(component).toMatchSnapshot() //first time test is run, it saves a file with current JSX/HTML output and 
    //later tests all future changes to UI against this picture

    renderer.act(() => {
        tree.props.onMouseEnter();
    })

      // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})