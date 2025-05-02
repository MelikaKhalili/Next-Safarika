import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import ReactDOM from "react-dom";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props: {
  [x: string]: any;
  value: any;
  dragging: any;
  index: any;
}) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 400, margin: 50 };
ReactDOM.render(
  <div>
    <div style={wrapperStyle}>
      <p>Slider with custom handle</p>
      <Slider min={0} max={20} defaultValue={3} handle={handle} />
    </div>
    <div style={wrapperStyle}>
      <p>Slider with fixed values</p>
      <Slider
        min={20}
        defaultValue={20}
        marks={{ 20: 20, 40: 40, 100: 100 }}
        step={null}
      />
    </div>
    <div style={wrapperStyle}>
      <p>Range with custom tooltip</p>
      <Range
        min={0}
        max={20}
        defaultValue={[3, 10]}
        tipFormatter={(value) => `${value}%`}
      />
    </div>
  </div>,
  document.getElementById("root")
);
