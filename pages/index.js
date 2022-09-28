import Link from 'next/link'
const Index = () => (
  <div>
    Click Here to visit website.{' '}
    <Link href="/x">
      <a>https://pastes.io</a>
    </Link>
  </div>
)
export default Index;

