import Link from 'next/link'
const Index = () => (
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
res.send('<script>window.location.href="https://pastes.io";</script>');
