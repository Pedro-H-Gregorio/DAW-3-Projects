import { FaArrowDown } from "react-icons/fa";

export default function Intro() {
  return (
    <div id="intro">
      <h1>Dialy</h1>
      <p>
        Este é um site para você depositar suas lembranças com fotos das suas
        melhores histórias
      </p>
      <ul className="actions">
        <li>
          <a href="#header" className="button icon solid solo scrolly">
            <FaArrowDown className="icon solo solid before" />
            Continue
          </a>
        </li>
      </ul>
    </div>
  );
}
