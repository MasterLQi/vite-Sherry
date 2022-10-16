import Mock from 'mockjs';
export const menuTreeMock: Record<string, unknown> = Mock.mock({
  'list|1-10': [
    {
      'id|+1': 1,
      name: '@cname'
    }
  ]
});
