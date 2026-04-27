import {describe, expect, it, vi} from 'vitest';
import {render, screen} from '@/lib/test-utils';
import {Button} from './Button';

describe('Button', () => {
  it('텍스트를 렌더링한다', () => {
    render(<Button>클릭</Button>);
    expect(screen.getByRole('button', {name: '클릭'})).toBeInTheDocument();
  });

  it('클릭 이벤트를 호출한다', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>클릭</Button>);
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('disabled 상태에서는 클릭되지 않는다', () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        클릭
      </Button>
    );
    screen.getByRole('button').click();
    expect(onClick).not.toHaveBeenCalled();
  });
});
