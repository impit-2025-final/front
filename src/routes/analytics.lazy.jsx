import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/analytics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/analytics"!</div>
}
