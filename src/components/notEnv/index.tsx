import "./style.less";

const NotEnv: React.FC = () => {
  return (
    <div className="env-tips">
      <img
        className="icon-info"
        src="https://img.meituan.net/csc/142c995aa7d56df6c8f21185cc61802c4225.png"
      />
      <h4 className="tips">请在微信或支付宝客户端打开链接</h4>
    </div>
  );
};
export default NotEnv;