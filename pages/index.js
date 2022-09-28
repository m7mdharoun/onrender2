import Link from 'next/link'
const Index = () => (
  <div>
    Hello World.{' '}
    <Link href="/xss">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
