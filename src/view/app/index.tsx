import  { CSSProperties, Component } from 'react';
import NotEnv from '@/components/notEnv';
import './style.less'

const errorStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px',
  letterSpacing: '2px',
  paddingTop: '100px',
};
console.log(121212121)
export class ErrorBoundary extends Component<
  { children?: JSX.Element },
  { hasError: boolean }
> {
  constructor(props: { children?: JSX.Element }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }
  render() {
    // 渲染错误视图
    if (this.state.hasError) {
      return <h1 style={errorStyles}>Something went wrong.</h1>;
    }
    // 渲染正确视图
    return this.props.children;
  }
}
export const GuardEnv: React.FC<{ children?: JSX.Element }> = ({
  children,
}) => {
  return import.meta.env.VITE_APP_SOURCE === 'mp'  ? (
    <NotEnv />
  ) : (
    <>{children}</>
  );
};
