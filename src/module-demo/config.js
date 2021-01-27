const tipRenderFunction = (h, params) => {
  let key = params.column.key
  let obj = params.row[key]
  return h('span', {domProps: {title: obj}, style: {textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}, obj)
}

export const ColumnTotal = [
  {
    type: '长城',
    data: [
      {
        title: '用例步骤',
        key: 'itemCodes',
        width: 130,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '预期结果',
        key: 'itemNames',
        width: 80,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '测试结果',
        key: 'frgnNames',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '结果描述',
        key: 'prices',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '德赛反馈',
        key: 'specs',
        width: 150,
        align: 'center',
        render: tipRenderFunction
      },
    ]
  },
  {
    type: '广丰',
    data: [
      {
        title: '用例步骤',
        key: 'itemCodes',
        width: 130,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '预期结果',
        key: 'itemNames',
        width: 80,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '测试结果',
        key: 'frgnNames',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '结果描述',
        key: 'prices',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '德赛反馈',
        key: 'specs',
        width: 150,
        align: 'center',
        render: tipRenderFunction
      },
    ]
  },
  {
    type: 'FCA',
    data: [
      {
        title: '用例步骤',
        key: 'itemCodes',
        width: 130,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '预期结果',
        key: 'itemNames',
        width: 80,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '测试结果',
        key: 'frgnNames',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '结果描述',
        key: 'prices',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '德赛反馈',
        key: 'specs',
        width: 150,
        align: 'center',
        render: tipRenderFunction
      },
    ]
  },
  {
    type: '上汽大通',
    data: [
      {
        title: '用例步骤',
        key: 'itemCodes',
        width: 130,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '预期结果',
        key: 'itemNames',
        width: 80,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '测试结果',
        key: 'frgnNames',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '结果描述',
        key: 'prices',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '德赛反馈',
        key: 'specs',
        width: 150,
        align: 'center',
        render: tipRenderFunction
      }
    ]
  },
  {
    type: '保时捷',
    data: [
      {
        title: '用例步骤',
        key: 'itemCodes',
        width: 130,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '预期结果',
        key: 'itemNames',
        width: 80,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '测试结果',
        key: 'frgnNames',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '结果描述',
        key: 'prices',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '德赛反馈',
        key: 'specs',
        width: 150,
        align: 'center',
        render: tipRenderFunction
      },
    ]
  },
  {
    type: '吉利',
    data: [
      {
        title: '用例步骤',
        key: 'itemCodes',
        width: 130,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '预期结果',
        key: 'itemNames',
        width: 80,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '测试结果',
        key: 'frgnNames',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '结果描述',
        key: 'prices',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '德赛反馈',
        key: 'specs',
        width: 150,
        align: 'center',
        render: tipRenderFunction
      },
    ]
  },
  {
    type: '柳汽',
    data: [
      {
        title: '用例步骤',
        key: 'itemCodes',
        width: 130,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '预期结果',
        key: 'itemNames',
        width: 80,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '测试结果',
        key: 'frgnNames',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '结果描述',
        key: 'prices',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '德赛反馈',
        key: 'specs',
        width: 150,
        align: 'center',
        render: tipRenderFunction
      },
    ]
  },
  {
    type: '广汽',
    data: [
      {
        title: '用例步骤',
        key: 'itemCodes',
        width: 130,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '预期结果',
        key: 'itemNames',
        width: 80,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '测试结果',
        key: 'frgnNames',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '结果描述',
        key: 'prices',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '德赛反馈',
        key: 'specs',
        width: 150,
        align: 'center',
        render: tipRenderFunction
      },
    ]
  },
  {
    type: '江淮',
    data: [
      {
        title: '用例步骤',
        key: 'itemCodes',
        width: 130,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '预期结果',
        key: 'itemNames',
        width: 80,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '测试结果',
        key: 'frgnNames',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '结果描述',
        key: 'prices',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '德赛反馈',
        key: 'specs',
        width: 150,
        align: 'center',
        render: tipRenderFunction
      },
    ]
  },
  {
    type: '江铃',
    data: [
      {
        title: '用例步骤',
        key: 'itemCodes',
        width: 130,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '预期结果',
        key: 'itemNames',
        width: 80,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '测试结果',
        key: 'frgnNames',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '结果描述',
        key: 'prices',
        width: 100,
        align: 'center',
        render: tipRenderFunction
      },
      {
        title: '德赛反馈',
        key: 'specs',
        width: 150,
        align: 'center',
        render: tipRenderFunction
      },
    ]
  }
]