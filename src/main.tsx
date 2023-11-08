import ReactDOM from 'react-dom/client'
import { ErrorBoundary, GuardEnv } from '@/view/app';
import Routes from '@/routes';

import "@/utils/rem"
import '@/style/reset.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ErrorBoundary>
      <GuardEnv>
        <Routes />
      </GuardEnv>
    </ErrorBoundary>
);
