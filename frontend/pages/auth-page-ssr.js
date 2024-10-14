import { withSession } from "../src/services/auth/session";

export default function AuthPageSSR(props) {
  return (
    <div>
      <h1>
        Auth Page Server Side Render
      </h1>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  )
}

// Decorator Pattern
export const getServerSideProps = withSession((ctx) => {
  return {
    props: {
      session: ctx.req.session,
    }
  }
});