import { useMemo, useState } from 'react';
import {
  Badge,
  Button,
  Collapse,
  Descriptions,
  Divider,
  Drawer,
  Flex,
  FloatButton,
  Layout,
  List,
  Menu,
  Row,
  Col,
  Space,
  Statistic,
  Steps,
  Tabs,
  Tag,
  Timeline,
  Typography,
  Image,
  Grid,
} from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CodeOutlined,
  DownloadOutlined,
  GithubOutlined,
  GlobalOutlined,
  LaptopOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { aboutCards, contacts, education, personalProjects, stats, techStack, workProjects } from './data/profile';

function App() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = useMemo(
    () => [
      { key: 'about', label: 'About', icon: <SafetyCertificateOutlined /> },
      { key: 'work', label: 'Work', icon: <LaptopOutlined /> },
      { key: 'projects', label: 'Projects', icon: <RocketOutlined /> },
      { key: 'tech', label: 'Tech', icon: <CodeOutlined /> },
      { key: 'stats', label: 'Stats', icon: <BarChartOutlined /> },
      { key: 'education', label: 'Education', icon: <AppstoreOutlined /> },
      { key: 'contact', label: 'Contact', icon: <MailOutlined /> },
    ],
    [],
  );

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const contactIcon = (name: string) => {
    switch (name) {
      case 'Email':
        return <MailOutlined />;
      case 'Phone':
        return <PhoneOutlined />;
      case 'LinkedIn':
        return <LinkedinOutlined />;
      case 'GitHub':
        return <GithubOutlined />;
      case 'LeetCode':
        return <CodeOutlined />;
      case 'Website':
        return <GlobalOutlined />;
      default:
        return <GlobalOutlined />;
    }
  };

  const topKpis = useMemo(
    () => [
      { title: 'Work Projects', value: workProjects.length },
      { title: 'Personal Projects', value: personalProjects.length },
      { title: 'Tech Categories', value: techStack.length },
    ],
    [],
  );

  return (
    <Layout style={{ background: 'transparent' }}>
      <Layout.Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'rgba(5, 7, 17, 0.72)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          paddingInline: 16,
        }}
      >
        <div className="container-max">
          <Flex align="center" justify="space-between" gap={12}>
            <Space size={10} align="center">
              <Badge color="cyan" />
              <Typography.Text strong style={{ color: 'rgba(255,255,255,0.92)', fontSize: 16 }}>
                Afik Yefet
              </Typography.Text>
              {screens.md && (
                <Typography.Text style={{ color: 'rgba(255,255,255,0.58)' }}>
                  • Full-Stack Developer
                </Typography.Text>
              )}
            </Space>

            {screens.md ? (
              <Menu
                mode="horizontal"
                theme="dark"
                selectable={false}
                items={sections.map((s) => ({
                  key: s.key,
                  icon: s.icon,
                  label: s.label,
                  onClick: () => scrollToId(s.key),
                }))}
                style={{ background: 'transparent', borderBottom: 0, minWidth: 520, justifyContent: 'flex-end' }}
              />
            ) : (
              <Button type="primary" onClick={() => setMobileOpen(true)}>
                Menu
              </Button>
            )}
          </Flex>
        </div>
      </Layout.Header>

      <Drawer
        title="Navigation"
        placement="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Menu
          mode="inline"
          items={sections.map((s) => ({
            key: s.key,
            icon: s.icon,
            label: s.label,
            onClick: () => {
              setMobileOpen(false);
              scrollToId(s.key);
            },
          }))}
        />
      </Drawer>

      <Layout.Content>
        <div className="hero">
          <div className="container-max">
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} lg={14}>
                <Space direction="vertical" size={12} style={{ width: '100%' }}>
                  <Tag color="cyan" icon={<SafetyCertificateOutlined />}>
                    High-tech web engineering
                  </Tag>
                  <Typography.Title style={{ margin: 0, color: 'rgba(255,255,255,0.95)' }} level={1}>
                    Afik Yefet
                  </Typography.Title>
                  <Typography.Paragraph style={{ margin: 0, color: 'rgba(255,255,255,0.72)', fontSize: 18 }}>
                    Full-Stack Developer at <b>Agilite</b>
                    <br />
                    Building internal tools + products
                  </Typography.Paragraph>

                  <Space wrap>
                    <Button type="primary" size="large" icon={<RocketOutlined />} onClick={() => scrollToId('projects')}>
                      Explore Projects
                    </Button>
                    <Button size="large" icon={<MailOutlined />} onClick={() => scrollToId('contact')}>
                      Contact
                    </Button>
                    <Button
                      size="large"
                      icon={<DownloadOutlined />}
                      href="/Afik_Yefet_Resume_2026.docx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </Button>
                  </Space>
                </Space>
              </Col>

              <Col xs={24} lg={10}>
                <Descriptions
                  title={<Typography.Text style={{ color: 'rgba(255,255,255,0.9)' }}>At a glance</Typography.Text>}
                  column={1}
                  bordered
                  size="middle"
                  styles={{
                    label: { color: 'rgba(255,255,255,0.70)', background: 'rgba(255,255,255,0.03)' },
                    content: { color: 'rgba(255,255,255,0.88)', background: 'rgba(5,7,17,0.25)' },
                  }}
                >
                  {topKpis.map((kpi) => (
                    <Descriptions.Item key={kpi.title} label={kpi.title}>
                      <Statistic value={kpi.value} valueStyle={{ color: 'rgba(255,255,255,0.92)' }} />
                    </Descriptions.Item>
                  ))}
                </Descriptions>
              </Col>
            </Row>
          </div>
        </div>

        <div id="about" className="section">
          <div className="container-max">
            <Typography.Title level={2} style={{ color: 'rgba(255,255,255,0.92)', marginTop: 0 }}>
              About
            </Typography.Title>
            <Typography.Paragraph style={{ color: 'rgba(255,255,255,0.68)' }}>
              A structured view into how I work and what I optimize for.
            </Typography.Paragraph>

            <Steps
              direction={screens.md ? 'horizontal' : 'vertical'}
              current={aboutCards.length}
              items={aboutCards.map((c) => ({
                title: c.title,
                description: c.description,
              }))}
            />
          </div>
        </div>

        <div id="work" className="section">
          <div className="container-max">
            <Typography.Title level={2} style={{ color: 'rgba(255,255,255,0.92)', marginTop: 0 }}>
              Work at Agilite
            </Typography.Title>
            <Typography.Paragraph style={{ color: 'rgba(255,255,255,0.68)' }}>
              Projects I’ve built and maintained.
            </Typography.Paragraph>

            <Collapse
              accordion
              items={workProjects.map((p) => ({
                key: p.title,
                label: (
                  <Space wrap>
                    <Typography.Text style={{ color: 'rgba(255,255,255,0.92)' }}>{p.title}</Typography.Text>
                    <Tag color="cyan">{p.description}</Tag>
                    {'impactBadge' in p && p.impactBadge ? <Tag color="geekblue">{p.impactBadge}</Tag> : null}
                  </Space>
                ),
                children: (
                  <Space direction="vertical" size={12} style={{ width: '100%' }}>
                    <Divider style={{ margin: '8px 0', borderColor: 'rgba(255,255,255,0.08)' }} />
                    <List
                      size="small"
                      dataSource={p.bullets}
                      renderItem={(b) => (
                        <List.Item>
                          <Space>
                            <SafetyCertificateOutlined style={{ color: '#22d3ee' }} />
                            <Typography.Text style={{ color: 'rgba(255,255,255,0.82)' }}>{b}</Typography.Text>
                          </Space>
                        </List.Item>
                      )}
                    />
                    <div>
                      {p.tags.map((t) => (
                        <Tag key={t} color="default" style={{ marginBottom: 8 }}>
                          {t}
                        </Tag>
                      ))}
                    </div>
                  </Space>
                ),
              }))}
            />
          </div>
        </div>

        <div id="projects" className="section">
          <div className="container-max">
            <Typography.Title level={2} style={{ color: 'rgba(255,255,255,0.92)', marginTop: 0 }}>
              Selected Projects
            </Typography.Title>
            <Typography.Paragraph style={{ color: 'rgba(255,255,255,0.68)' }}>
              Personal projects and side work.
            </Typography.Paragraph>

            <Tabs
              items={[
                {
                  key: 'personal',
                  label: 'Personal',
                  children: (
                    <Collapse
                      items={personalProjects.map((p) => ({
                        key: p.title,
                        label: (
                          <Space wrap>
                            <Typography.Text style={{ color: 'rgba(255,255,255,0.92)' }}>{p.title}</Typography.Text>
                            <Tag color="cyan">{p.description}</Tag>
                          </Space>
                        ),
                        children: (
                          <Space direction="vertical" size={12} style={{ width: '100%' }}>
                            <List
                              size="small"
                              dataSource={p.bullets}
                              renderItem={(b) => (
                                <List.Item>
                                  <Space>
                                    <RocketOutlined style={{ color: '#22d3ee' }} />
                                    <Typography.Text style={{ color: 'rgba(255,255,255,0.82)' }}>{b}</Typography.Text>
                                  </Space>
                                </List.Item>
                              )}
                            />
                            <div>
                              {p.tags.map((t) => (
                                <Tag key={t} style={{ marginBottom: 8 }}>
                                  {t}
                                </Tag>
                              ))}
                            </div>
                          </Space>
                        ),
                      }))}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>

        <div id="tech" className="section">
          <div className="container-max">
            <Typography.Title level={2} style={{ color: 'rgba(255,255,255,0.92)', marginTop: 0 }}>
              Tech Stack
            </Typography.Title>
            <Typography.Paragraph style={{ color: 'rgba(255,255,255,0.68)' }}>
              Organized by domain.
            </Typography.Paragraph>

            <Collapse
              items={techStack.map((c) => ({
                key: c.category,
                label: (
                  <Space>
                    <CodeOutlined />
                    <Typography.Text style={{ color: 'rgba(255,255,255,0.90)' }}>{c.category}</Typography.Text>
                    <Tag color="cyan">{c.items.length} items</Tag>
                  </Space>
                ),
                children: (
                  <Flex wrap="wrap" gap={8}>
                    {c.items.map((i) => (
                      <Tag key={i} color="default">
                        {i}
                      </Tag>
                    ))}
                  </Flex>
                ),
              }))}
            />
          </div>
        </div>

        <div id="stats" className="section">
          <div className="container-max">
            <Typography.Title level={2} style={{ color: 'rgba(255,255,255,0.92)', marginTop: 0 }}>
              GitHub & LeetCode Stats
            </Typography.Title>
            <Typography.Paragraph style={{ color: 'rgba(255,255,255,0.68)' }}>
              Live stat cards loaded as images.
            </Typography.Paragraph>

            <Tabs
              items={[
                {
                  key: 'leetcode',
                  label: 'LeetCode',
                  children: (
                    <Image
                      src={stats.leetcode.cardUrl}
                      alt="LeetCode statistics"
                      style={{ maxWidth: 820, width: '100%' }}
                    />
                  ),
                },
                {
                  key: 'github-streak',
                  label: 'GitHub Streak',
                  children: (
                    <Image
                      src={stats.github.streakUrl}
                      alt="GitHub streak"
                      style={{ maxWidth: 820, width: '100%' }}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>

        <div id="education" className="section">
          <div className="container-max">
            <Typography.Title level={2} style={{ color: 'rgba(255,255,255,0.92)', marginTop: 0 }}>
              Education
            </Typography.Title>
            <Typography.Paragraph style={{ color: 'rgba(255,255,255,0.68)' }}>
              Timeline view.
            </Typography.Paragraph>

            <Timeline
              items={education.map((e) => ({
                children: (
                  <Space direction="vertical" size={2}>
                    <Typography.Text strong style={{ color: 'rgba(255,255,255,0.92)' }}>
                      {e.degree}
                    </Typography.Text>
                    <Typography.Text style={{ color: 'rgba(255,255,255,0.72)' }}>
                      {e.institution} • {e.period}
                      {e.description ? ` • ${e.description}` : ''}
                    </Typography.Text>
                  </Space>
                ),
              }))}
            />
          </div>
        </div>

        <div id="contact" className="section">
          <div className="container-max">
            <Typography.Title level={2} style={{ color: 'rgba(255,255,255,0.92)', marginTop: 0 }}>
              Get In Touch
            </Typography.Title>
            <Typography.Paragraph style={{ color: 'rgba(255,255,255,0.68)' }}>
              Fastest ways to reach me.
            </Typography.Paragraph>

            <List
              bordered
              dataSource={contacts}
              renderItem={(c) => (
                <List.Item
                  actions={[
                    <Button key="open" type="link" href={c.url} target="_blank" rel="noopener noreferrer">
                      Open
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Badge color="cyan" />}
                    title={
                      <Space>
                        {contactIcon(c.name)}
                        <Typography.Text style={{ color: 'rgba(255,255,255,0.92)' }}>{c.name}</Typography.Text>
                      </Space>
                    }
                    description={<Typography.Text style={{ color: 'rgba(255,255,255,0.65)' }}>{c.description}</Typography.Text>}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </Layout.Content>

      <Layout.Footer style={{ background: 'transparent', color: 'rgba(255,255,255,0.55)' }}>
        <div className="container-max">
          <Flex justify="space-between" align="center" wrap="wrap" gap={12}>
            <Typography.Text style={{ color: 'rgba(255,255,255,0.55)' }}>
              © {new Date().getFullYear()} Afik Yefet
            </Typography.Text>
            <Space wrap>
              {contacts.map((c) => (
                <Button key={c.name} type="link" href={c.url} target="_blank" rel="noopener noreferrer">
                  {c.name}
                </Button>
              ))}
            </Space>
          </Flex>
        </div>
      </Layout.Footer>

      <FloatButton.BackTop />
    </Layout>
  );
}

export default App;

