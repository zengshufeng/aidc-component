import './ExampleCard.css';

/**
 * ExampleCard — 示例 2D 卡片（纯展示 + props，二开者参照写自己的卡片）
 *
 * v3 数据流：节点 params（生产数据源）+ id 由卡片系统自动注入为 props，
 * 组件只管把业务字段渲染出来，不管定位/显隐（cards/registry 的 CSS2D 锚点托管）。
 * starter 数据（cars 分组）注入：{ id, name?, status?, speed? }。
 * 状态徽章颜色走状态语义（normal/alarm/maintenance），与 materials.ts 的状态视觉同源。
 */

const STATUS_LABEL: Record<string, string> = {
  normal: '运行',
  alarm: '告警',
  maintenance: '检修',
};

export interface ExampleCardProps {
  id: string;
  name?: string;
  status?: string;
  speed?: number;
}

export function ExampleCard(props: ExampleCardProps) {
  const { id, name, status, speed } = props;
  const title = name ?? id;
  const statusLabel = status ? (STATUS_LABEL[status] ?? status) : null;
  const statusClass = status && status in STATUS_LABEL ? status : 'ok';
  const speedText = typeof speed === 'number' ? `${speed.toFixed(1)} m/s` : null;

  return (
    <div className={`example-card example-card--${statusClass}`}>
      <div className="example-card__head">
        <span className="example-card__title">{title}</span>
        {statusLabel && <span className="example-card__badge">{statusLabel}</span>}
      </div>
      {speedText && (
        <div className="example-card__row">
          <span className="example-card__key">速度</span>
          <span className="example-card__val">{speedText}</span>
        </div>
      )}
      <div className="example-card__row">
        <span className="example-card__key">编号</span>
        <span className="example-card__val">{id}</span>
      </div>
    </div>
  );
}

export default ExampleCard;