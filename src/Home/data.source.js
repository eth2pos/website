import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://i.postimg.cc/j5x2M5cB/Slice-1-2x.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item3',
        className: 'header0-item kmhfpt5psg-editor_css',
        children: {
          href: '#',
          children: [{ children: '导航四', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title kmhfplvb7jt-editor_css',
    children: (
      <span>
        <p>ETH2.0质押挖矿</p>
      </span>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <span>
          <span>
            <span>
              <p>
                <span>致力于开发ETH2第二层网络上的超级节点</span>
                <br />
              </p>
              <p>
                通过基于POS的验证方式让ETH整体网络实现0Gas和40万笔交易/S&nbsp;<br />
              </p>
              <p>
                <br />
              </p>
              <p>
                #imToken#7068# 我们正在完善 ETH2POS 在 imToken
                中的代币相关资料。完成后，大家可以在 imToken 里看到
                logo，更方便地管理 ETH2POS，同时能看到更多代币信息。
              </p>
            </span>
          </span>
        </span>
      </span>
    ),
  },
  button: {
    className: 'banner0-button kmhfq7kgeah-editor_css',
    children: 'Learn More',
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>质押服务</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/money-bag_1f4b0.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>ETH2D/W</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <span>
                      <p>流动性挖矿，随存随取</p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/gem-stone_1f48e.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>ETH2POS</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>10倍算力，10倍收益</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/party-popper_1f389.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>ETH2 Validator</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>成为完整节点，加速挖矿</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature80DataSource = {
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  page: { className: 'home-page feature8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature8-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature8-title-h1',
        children: (
          <span>
            <p>质押流程</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'feature8-title-content',
        children: (
          <span>
            <span>
              <p>质押流程简单清晰，智能合约公开可查</p>
              <p>合约地址：0x00000000219ab540356cBB839Cbe05303d7705Fa</p>
            </span>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'feature8-button-wrapper',
    children: [
      {
        name: 'button',
        className: 'feature8-button',
        children: {
          href:
            'https://bafybeigdplqsbkgkmx7a65rtfiq2ah6hxyji5uh7ctzcstest5lnw3bugy.ipfs.cf-ipfs.com/#/',
          children: (
            <span>
              <p>立即质押</p>
            </span>
          ),
          type: 'primary',
        },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: 'feature8-carousel',
    wrapper: { className: 'feature8-block-wrapper' },
    children: {
      className: 'feature8-block',
      titleWrapper: {
        className: 'feature8-carousel-title-wrapper',
        title: { className: 'feature8-carousel-title kmhljad85ng-editor_css' },
      },
      children: [
        {
          name: 'block0',
          className: 'feature8-block-row',
          gutter: 120,
          title: {
            className: 'feature8-carousel-title-block',
            children: '平台自主训练流程',
          },
          children: [
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child kmhlsob012m-editor_css',
                children: [
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>进入质押页面</p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <span>
                          <span>
                            <span>
                              <p>点击下方“立即质押”按钮，进入ETH2POS合约页</p>
                            </span>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child kmhlxsc65br-editor_css',
                children: [
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>连接钱包</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>支持各大钱包，包括imToken，Metamask等</p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child kmhll7a6tv-editor_css',
                children: [
                  {
                    name: 'title',
                    className: 'feature8-block-title kmhlxwm7rwl-editor_css',
                    children: (
                      <span>
                        <p>选择质押类型</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <p>根据实际需求选择质押类型和金额，完成质押</p>
                                <p>
                                  <br />
                                </p>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child kmhm1cjnbj-editor_css',
                children: [
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>代币发放</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>每月9号，发放ETH2POS代币作为质押奖励</p>
                      </span>
                    ),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children:
      'https://cdn.shopifycdn.net/s/files/1/1061/1924/products/Money_with_Wings_Emoji_large.png?v=1571606064',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>Token经济</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>
                <p>总供给量21000枚ETH2POS</p>
                <p>&nbsp;0预挖，0团队，0私募，2021市场空投激励</p>
                <p>
                  其余的全部通过真实的ETH2网络挖矿和ETH1:1，1:0.5，1:0.25，1:0.125
                  每个月减半一次的进行产出
                </p>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Roadmap</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>更多项目正在路上</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>自建公链</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>自建公链</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>ETH2SWAP</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>ETH2SWAP</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>以太坊2交易所</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>以太坊2交易所</p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/NuuAwJBxewWglRSoNjET.png',
        className: 'copyright-logo kmhmsqhfdt-editor_css',
      },
      {
        name: 'group',
        children: (
          <span>
            <p>ETH2POS</p>
          </span>
        ),
        className: 'copyright-group kmhmsjtgto-editor_css',
      },
      {
        name: 'image2',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg',
        className: 'copyright-line kmhmstvgnf-editor_css',
      },
      {
        name: 'copyright',
        children: (
          <span>
            <p>Copyright © ETH2POS</p>
          </span>
        ),
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'weibo',
        href: 'https://twitter.com/eth2pos',
        className: 'links-weibo',
        children:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjWaIQllYvIQVGqMmUhYzMRQWY5Rfm5lnfqh54/XeTJpsla2ixMavBX8BW2WtFJGSlYU1sWF6zjNTM8mc27nnc7/3ntO954IjnFI1s8YDWjpjhIJ+ZW5+QXG+4KaFVlwMR1RTn5oZC1PRPu+psuNtr12r8rl/zb0cM1WoqhMeUXUjIzwuPLmW0W3eEW5Rk5Fl4TPhHkMuKHxn69ECv9qcKPC3zUY4FABHk7CSKONoGatJQxOWl9OppbJq8T72S+pj6dkZiR3i7ZiECOJHYYJRAvjoZ0hmH7146ZMVFfI9v/nTrEquKrNODoMVEiTJ0CNqVqrHJMZFj8lIkbP7/7evZnzAW6he74faZ8t67wLnNuS3LOvryLLyx1D9BJfpUv7qIQx+iL5V0joPoHEDzq9KWnQXLjah7VGPGJFfqVrcEY/D2yk0zEPzDbgWCz0r7nPyAOF1+apr2NuHbjnfuPQDmcZn/XYig1cAAAAJcEhZcwAACxMAAAsTAQCanBgAAAK6SURBVFiFzZjPi01hGMc/721civxMfoxQykI0U4PZUBKJjdlJZD82M7KTUixkZyP+DCywkI2dGfm1Qhoy7pCRmvwo4WNxztVx595zznvvzORb7+Kc+7zP+Zz3Pud53ucNRErtBQ4D24G16VgBfAJq6RgFboQQHsf6LwOwRL2gvjZOr9N5i2cCoqoOq5OREI2aTP1U2wXpVkc7hGjUiNodC9KvTswwSF01tT8G5PssgdT1vRlQaABZB4wAq6OWsj1NADtCCO/qNyoZkCpwfY5AANYAN8wEdSXz40mgb45A6uoDBusXAZI8ArwiSV6d6g3wEthCkhCLNAlsCiFMkcJcKAi4eyWCclzdn32KOqA+VS+qZ3Lmns9OysusX0yS36D6o4XNT3VHq1dXN6t31Pct5o/VDXtzQFRHM053qx+a2NzM+x/URenL5KmnQlL08rRVXQAQQrhPUiCvAVMZm0cFPvYBVwpsBiqp8zzNB47XL0IIb0MIgySf5iHgNPCgwMceGnJaE/V1URzxb4CV6roQwngG6htwOx1F6i1hsxaLa9BvdWMJZy2lfi54hmqtQnFuCcCJDkA2AEtLmK4oszKqv9Sr6rI2YE6V8P93ZWolfFbSsS0SZBVwrqR5aRiAA8CTGBjgErAkBma00CzRBuCWelRdWGSs7iIu1h6WycCNeq4eLAA5ok5F+u2pT86rTS/Uu+pl9ZjalQMx3yTQYzWWdZJXtT+oZ9XlORDz1IPqozZANK3aMfuZb8Azkr3KS+Ar0A2sB/YC0Z99qn/3MynQcJtv1amGmi111Znvk4o0YmYP3NgddJN0B2vaXPIYTesOpsm565t2lkJOgWqzBFIrDZIB+j967QxQVR1SP3YI8TH1094pRAPUYvW8OhYJMZbOK3U+U7QvbQbWAwyQdIOtTq4eAtdDCFFV/g8KbukLoY8p/AAAAABJRU5ErkJggg==',
      },
      {
        name: 'zhihu',
        href: 'https://medium.com/@eth2pos',
        className: 'links-zhihu',
        children:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAjCAYAAAAAEIPqAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjWaIQllYvIQVGqMmUhYzMRQWY5Rfm5lnfqh54/XeTJpsla2ixMavBX8BW2WtFJGSlYU1sWF6zjNTM8mc27nnc7/3ntO954IjnFI1s8YDWjpjhIJ+ZW5+QXG+4KaFVlwMR1RTn5oZC1PRPu+psuNtr12r8rl/zb0cM1WoqhMeUXUjIzwuPLmW0W3eEW5Rk5Fl4TPhHkMuKHxn69ECv9qcKPC3zUY4FABHk7CSKONoGatJQxOWl9OppbJq8T72S+pj6dkZiR3i7ZiECOJHYYJRAvjoZ0hmH7146ZMVFfI9v/nTrEquKrNODoMVEiTJ0CNqVqrHJMZFj8lIkbP7/7evZnzAW6he74faZ8t67wLnNuS3LOvryLLyx1D9BJfpUv7qIQx+iL5V0joPoHEDzq9KWnQXLjah7VGPGJFfqVrcEY/D2yk0zEPzDbgWCz0r7nPyAOF1+apr2NuHbjnfuPQDmcZn/XYig1cAAAAJcEhZcwAACxMAAAsTAQCanBgAAAMgSURBVFiFrZjbi01hGMaf18xIDinNhUShJKRRSi4QSkQOF1JESSaHuDE1/gM5xM24IeWQwwUiI3FB5JAbNzQoSSNCjGMmmcPPxV4re9bea633W7Of2u31rfW8z/vra397fWsJ2Ea4ngOmGgg4G9i7W8BQ4H4B8FU1AG4E/gT0/AEsKC9+HQj9sAbQrQH9vgCzkwHTgO+B4PMGAWz4J+o9MD0taAnQEwDdPgjopQF9FuWF7Q4I6wdmFIS+GtCnLi+sHvgQEHi6APB4oLco9JBkoJn1SgpZZOuBCYHczZKyZy9DFdCRCMhokLTHawbqJW0NyK9QGnS5+hyeZmCMs+dqSeOi435nzQB5oC87PCMk7XL23BF9f5P02FkzQB7oA86s3cDwLAMwRdLiaHhG0h9n9gB5oJ9JuuHwNUrakuPZLinesxxzZFaVB1qS9jt9LdFCqxAwTNLmaPjAzF44Myvkgjaz+5IeOawTJa1LubZOUrxYC8+y5J9pyf/bbk05Hy/Ar5IuBfStUAh0u6QOh68JWFZ+ApglaW40PG1mhRZgLDe0mSHpkNO+NzHeUXZ83NszTSEzLUnnJb11+BYCcyQJGCVpQ3T+npm9DOxZoSBoM+uRdMRpj2d7k6SR0fGgFmCmgItlO6yGxLURlJ4i8tQHTAWeRuPPwNBE1u2a7PLyZGa/JR11WIdIOidpZjQ+ZWZ/Q/ulBRdRm6Ruhy9+pkM1WICxCkGbWZekEwEld83sVZFe1VR0piXpsKQep7emC7AwtJm9lXTBYf0s6UrRPtWUBt2QcpzUQeU/5Zys1QKMVQEd/b3MLzu1JK3YzDokXc/Ir+kCjFVtppfr/25Myt8jZ21bb5vZ62CqEAGTU24cLTl1ae8C1+bU3SlycykPGE3pbWg19QErM5qvqFLzkcTdNFEzCvjphK58wwTUATdzCn8BTRkQTxP+fRne0cBDJzDAO2BqMqTNWdwJjE0B2Vjm6wcmpfgagScBwLE+ATPjkJ2BxY8pPe8lYeqBN5HnVgrwOKCjAHCs0uteSr+9rsDPhhSo7cA3YE3K9WuDAI7V+Q9iTX27UGxlUQAAAABJRU5ErkJggg==',
      },
      {
        name: 'zhihu~kmhn0mvadxi',
        href: 'https://discord.gg/3M6FwCC8UY',
        className: 'links-zhihu',
        children:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAnCAYAAABnlOo2AAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjWaIQllYvIQVGqMmUhYzMRQWY5Rfm5lnfqh54/XeTJpsla2ixMavBX8BW2WtFJGSlYU1sWF6zjNTM8mc27nnc7/3ntO954IjnFI1s8YDWjpjhIJ+ZW5+QXG+4KaFVlwMR1RTn5oZC1PRPu+psuNtr12r8rl/zb0cM1WoqhMeUXUjIzwuPLmW0W3eEW5Rk5Fl4TPhHkMuKHxn69ECv9qcKPC3zUY4FABHk7CSKONoGatJQxOWl9OppbJq8T72S+pj6dkZiR3i7ZiECOJHYYJRAvjoZ0hmH7146ZMVFfI9v/nTrEquKrNODoMVEiTJ0CNqVqrHJMZFj8lIkbP7/7evZnzAW6he74faZ8t67wLnNuS3LOvryLLyx1D9BJfpUv7qIQx+iL5V0joPoHEDzq9KWnQXLjah7VGPGJFfqVrcEY/D2yk0zEPzDbgWCz0r7nPyAOF1+apr2NuHbjnfuPQDmcZn/XYig1cAAAAJcEhZcwAACxMAAAsTAQCanBgAAAKfSURBVFiF7ZgxSFVRGMd/39MozRBTaskkI4IIoqCsaIjIIbK2hmoomiKDBt/Y0lA0BBHZFNUUDVHQ1FC6VIZDUlQORoG+2ipJEB3Uf8O5T04P7z332dPr4B8e3Hu+73zf7953znfOuQBIapDULemLpBktnqYlDUq6LqkWwCQ1AgPARrLVZ6DNJN0DzmUMU9RNk1QANmRNEumbSVLWFL5yWQOUahkopCUHVF2m/2/gGa5u7QdOxvg9BN4Cu4BTwKq0CdLOslHgCtAHHAfWA++AQmQbBcaBZmBL9KsBvgK9uDp3HlhTCaACsBtoBQzoN7PpFA9BtAoci8AGgR5gR6hTSPk0yVMCng4lCwGNSaqvIFC1pJGkhKFZ9sDM/lQKyMymgNsh6iQdrBSMl2/zfP+yMUkr5ghoko5IyktqmsPeKKkr8rEYqKH5AD2NCZb3fEYkVXm2KknDnr0rJsatuKRJY+h1TPsJ77oZaPPu9/LvRs/39fUqLmkSUCGmvce7/oWr2kUN4IpkUS/KjJ24dPyIab8G/AS2Ad1mNlk0mNmEpMNAJ/AJuFtm7MRZ1lLiV5MAnyhJa0vuqyRNlTuGSuvPTklXJbX7AzkA0irpAtBSYrI54juDFLuW9QIdZjbhJagFLgJnInsfMAx8B+qABqAJOIBb+x4BT8xMXox64DHQHvcUSfog6WiJf62kgUC/Yt/VXr+VkjolFZI6pd1+DAHvgY/AHtwKnkY90RvcjpsEdaEOy6eOkJaBQsoBk0GvymgmjVMON3sWQ89xtStROeDGwrMA7tjUAdwPekq6JGk8RbH7Xx2K8l2OLYwe1DpgH7CJhRvsb8ysP8p3FrcbKPewunCSW6hH/TeUNROStsrbY2fNA8x+dH25ZIBg9hB55y9GHvb7VAqZIgAAAABJRU5ErkJggg==',
      },
    ],
  },
};
