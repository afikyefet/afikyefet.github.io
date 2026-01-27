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
import {
  Badge,
  Button,
  Col,
  Collapse,
  Descriptions,
  Divider,
  Drawer,
  Flex,
  FloatButton,
  Grid,
  Image,
  Layout,
  List,
  Menu,
  Row,
  Space,
  Statistic,
  Steps,
  Tabs,
  Tag,
  Timeline,
  Typography,
} from 'antd';
import { useMemo, useState } from 'react';
import { Reveal, Stagger } from './components/Reveal';
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
          background: screens.xs ? 'rgba(5, 7, 17, 0.95)' : 'rgba(5, 7, 17, 0.72)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          paddingInline: screens.xs ? 12 : 16,
          height: screens.xs ? 56 : 64,
          lineHeight: screens.xs ? '56px' : '64px',
        }}
      >
        <div className="container-max">
          <Flex align="center" justify="space-between" gap={screens.xs ? 8 : 12}>
            <Space size={screens.xs ? 8 : 10} align="center">
              <Typography.Text strong style={{ color: 'rgba(255,255,255,0.92)', fontSize: screens.xs ? 15 : 16 }}>
                Afik Yefet
              </Typography.Text>
              {screens.md && (
                <Typography.Text style={{ color: 'rgba(255,255,255,0.58)', fontSize: screens.xs ? 12 : 14 }}>
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
              <Button
                type="primary"
                onClick={() => setMobileOpen(true)}
                size={screens.xs ? "middle" : "large"}
                style={{
                  borderRadius: 8,
                  fontWeight: 500,
                  boxShadow: '0 2px 8px rgba(34, 211, 238, 0.2)'
                }}
              >
                Menu
              </Button>
            )}
          </Flex>
        </div>
      </Layout.Header>

      <Drawer
        title={
          <Typography.Text strong style={{ fontSize: 18, color: 'rgba(255,255,255,0.95)' }}>
            Navigation
          </Typography.Text>
        }
        placement="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        width={280}
        styles={{
          body: { padding: '16px 0' },
          header: {
            padding: '16px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }
        }}
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
          style={{
            background: 'transparent',
            border: 'none'
          }}
        />
      </Drawer>

      <Layout.Content>
        <div className="hero">
          <div className="container-max">
            <Row gutter={[screens.xs ? 16 : 24, screens.xs ? 20 : 24]} align="middle">
              <Col xs={24} lg={14}>
                <Reveal direction="blur" distance={50}>
                  <Space direction="vertical" size={screens.xs ? 16 : 20} style={{ width: '100%' }}>
                    <Tag
                      color="cyan"
                      icon={<SafetyCertificateOutlined />}
                      style={{
                        fontSize: screens.xs ? 12 : 13,
                        padding: screens.xs ? '4px 12px' : '6px 16px',
                        borderRadius: 6,
                        border: '1px solid rgba(34, 211, 238, 0.3)',
                        background: 'rgba(34, 211, 238, 0.1)'
                      }}
                    >
                      High-tech web engineering
                    </Tag>
                    <Typography.Title
                      style={{
                        margin: 0,
                        color: 'rgba(255,255,255,0.95)',
                        fontSize: screens.xs ? '2.25rem' : screens.sm ? '2.75rem' : '3rem',
                        lineHeight: 1.15,
                        fontWeight: 700,
                        letterSpacing: screens.xs ? '-0.02em' : '-0.03em'
                      }}
                      level={1}
                    >
                      Afik Yefet
                    </Typography.Title>
                    <Typography.Paragraph
                      style={{
                        margin: 0,
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: screens.xs ? 15 : screens.sm ? 17 : 18,
                        lineHeight: 1.65,
                        maxWidth: screens.xs ? '100%' : '90%'
                      }}
                    >
                      Full-Stack Developer at <b style={{ color: 'rgba(255,255,255,0.9)' }}>Agilite</b>
                      <br />
                      Building internal tools + products
                    </Typography.Paragraph>

                    <Space
                      wrap
                      size={screens.xs ? 10 : 12}
                      style={{
                        width: '100%',
                        marginTop: screens.xs ? 8 : 0
                      }}
                    >
                      <Button
                        type="primary"
                        size={screens.xs ? "middle" : "large"}
                        icon={<RocketOutlined />}
                        onClick={() => scrollToId('projects')}
                        style={{
                          fontSize: screens.xs ? 14 : undefined,
                          height: screens.xs ? 40 : undefined,
                          borderRadius: 8,
                          fontWeight: 500,
                          boxShadow: screens.xs ? '0 2px 8px rgba(34, 211, 238, 0.25)' : '0 4px 12px rgba(34, 211, 238, 0.3)'
                        }}
                      >
                        Explore Projects
                      </Button>
                      <Button
                        size={screens.xs ? "middle" : "large"}
                        icon={<MailOutlined />}
                        onClick={() => scrollToId('contact')}
                        style={{
                          fontSize: screens.xs ? 14 : undefined,
                          height: screens.xs ? 40 : undefined,
                          borderRadius: 8,
                          fontWeight: 500,
                          borderColor: 'rgba(255,255,255,0.2)',
                          background: 'rgba(255,255,255,0.05)'
                        }}
                      >
                        Contact
                      </Button>
                      <Button
                        size={screens.xs ? "middle" : "large"}
                        icon={<DownloadOutlined />}
                        href="/Afik_Yefet_CV_2026.docx"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: screens.xs ? 14 : undefined,
                          height: screens.xs ? 40 : undefined,
                          borderRadius: 8,
                          fontWeight: 500,
                          borderColor: 'rgba(255,255,255,0.2)',
                          background: 'rgba(255,255,255,0.05)'
                        }}
                      >
                        Resume
                      </Button>
                    </Space>
                  </Space>
                </Reveal>
              </Col>

              <Col xs={24} lg={10}>
                <Reveal direction="scale" delay={0.2}>
                  <div style={{
                    borderRadius: screens.xs ? 12 : 16,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(5,7,17,0.4)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: screens.xs ? '0 4px 20px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.4)'
                  }}>
                    <Descriptions
                      title={
                        <Typography.Text
                          strong
                          style={{
                            color: 'rgba(255,255,255,0.95)',
                            fontSize: screens.xs ? 15 : 16,
                            display: 'block',
                            paddingTop: screens.xs ? 16 : 20,
                            paddingLeft: screens.xs ? 16 : 20,
                            paddingBottom: screens.xs ? 8 : 12,
                            marginBottom: 0
                          }}
                        >
                          At a glance
                        </Typography.Text>
                      }
                      column={1}
                      bordered
                      size={screens.xs ? "small" : "middle"}
                      styles={{
                        header: {
                          padding: 0,
                          marginBottom: 0
                        },
                        label: {
                          color: 'rgba(255,255,255,0.70)',
                          background: 'rgba(255,255,255,0.05)',
                          fontSize: screens.xs ? 12 : 13,
                          fontWeight: 500,
                          padding: screens.xs ? '10px 12px' : '12px 16px',
                          paddingLeft: screens.xs ? 16 : 20
                        },
                        content: {
                          color: 'rgba(255,255,255,0.92)',
                          background: 'rgba(5,7,17,0.3)',
                          fontSize: screens.xs ? 14 : 16,
                          padding: screens.xs ? '10px 12px' : '12px 16px',
                          paddingRight: screens.xs ? 16 : 20
                        },
                      }}
                    >
                      {topKpis.map((kpi) => (
                        <Descriptions.Item key={kpi.title} label={kpi.title}>
                          <Statistic
                            value={kpi.value}
                            valueStyle={{
                              color: 'rgba(255,255,255,0.95)',
                              fontSize: screens.xs ? 20 : 24,
                              fontWeight: 600
                            }}
                          />
                        </Descriptions.Item>
                      ))}
                    </Descriptions>
                  </div>
                </Reveal>
              </Col>
            </Row>
          </div>
        </div>

        <div id="about" className="section">
          <div className="container-max">
            <Reveal direction="blur" delay={0.1}>
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                <Typography.Title
                  level={2}
                  style={{
                    color: 'rgba(255,255,255,0.92)',
                    marginTop: 0,
                    fontSize: screens.xs ? '1.5rem' : screens.sm ? '1.75rem' : '2rem'
                  }}
                >
                  About
                </Typography.Title>
                <Typography.Paragraph
                  style={{
                    color: 'rgba(255,255,255,0.68)',
                    fontSize: screens.xs ? 14 : 16,
                    lineHeight: 1.6
                  }}
                >
                  A structured view into how I work and what I optimize for.
                </Typography.Paragraph>
              </Space>
            </Reveal>

            <Reveal direction="up" delay={0.15} distance={30}>
              <Steps
                direction={screens.md ? 'horizontal' : 'vertical'}
                current={aboutCards.length}
                items={aboutCards.map((c) => ({
                  title: c.title,
                  description: c.description,
                }))}
              />
            </Reveal>
          </div>
        </div>

        <div id="work" className="section">
          <div className="container-max">
            <Reveal direction="left" distance={60}>
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                <Typography.Title
                  level={2}
                  style={{
                    color: 'rgba(255,255,255,0.92)',
                    marginTop: 0,
                    fontSize: screens.xs ? '1.5rem' : screens.sm ? '1.75rem' : '2rem'
                  }}
                >
                  Work at Agilite
                </Typography.Title>
                <Typography.Paragraph
                  style={{
                    color: 'rgba(255,255,255,0.68)',
                    fontSize: screens.xs ? 14 : 16,
                    lineHeight: 1.6
                  }}
                >
                  Projects I've built and maintained.
                </Typography.Paragraph>
              </Space>
            </Reveal>

            <Reveal direction="bounce" delay={0.1}>
              <Collapse
                accordion
                items={workProjects.map((p) => ({
                  key: p.title,
                  label: (
                    <Stagger delay={0.04}>
                      <Space wrap size={screens.xs ? 6 : 8} style={{ width: '100%' }}>
                        <Typography.Text
                          strong
                          style={{
                            color: 'rgba(255,255,255,0.95)',
                            fontSize: screens.xs ? 14 : 15,
                            flex: 1
                          }}
                        >
                          {p.title}
                        </Typography.Text>
                        <Tag
                          color="cyan"
                          style={{
                            fontSize: screens.xs ? 11 : 12,
                            borderRadius: 4,
                            border: '1px solid rgba(34, 211, 238, 0.3)',
                            maxWidth: '100%',
                            whiteSpace: 'normal',
                            wordBreak: 'break-word'
                          }}
                        >
                          {p.description}
                        </Tag>
                        {'impactBadge' in p && p.impactBadge ? (
                          <Tag
                            color="geekblue"
                            style={{
                              fontSize: screens.xs ? 11 : 12,
                              borderRadius: 4
                            }}
                          >
                            {p.impactBadge}
                          </Tag>
                        ) : null}
                      </Space>
                    </Stagger>
                  ),
                  children: (
                    <Stagger delay={0.04}>
                      <Space direction="vertical" size={12} style={{ width: '100%' }}>
                        <Divider style={{ margin: '8px 0', borderColor: 'rgba(255,255,255,0.08)' }} />
                        <List
                          size="small"
                          dataSource={p.bullets}
                          renderItem={(b) => (
                            <List.Item>
                              <Space size={screens.xs ? 8 : 12}>
                                <SafetyCertificateOutlined style={{ color: '#22d3ee', fontSize: screens.xs ? 14 : 16 }} />
                                <Typography.Text
                                  style={{
                                    color: 'rgba(255,255,255,0.82)',
                                    fontSize: screens.xs ? 13 : 14,
                                    lineHeight: 1.6
                                  }}
                                >
                                  {b}
                                </Typography.Text>
                              </Space>
                            </List.Item>
                          )}
                        />
                        <div style={{ marginTop: screens.xs ? 8 : 12 }}>
                          {p.tags.map((t) => (
                            <Tag
                              key={t}
                              color="default"
                              style={{
                                marginBottom: screens.xs ? 6 : 8,
                                marginRight: screens.xs ? 6 : 8,
                                fontSize: screens.xs ? 11 : 12,
                                borderRadius: 4,
                                padding: screens.xs ? '2px 8px' : '4px 10px',
                                maxWidth: '100%',
                                whiteSpace: 'normal',
                                wordBreak: 'break-word'
                              }}
                            >
                              {t}
                            </Tag>
                          ))}
                        </div>
                      </Space>
                    </Stagger>
                  ),
                }))}
              />
            </Reveal>
          </div>
        </div>

        <div id="projects" className="section">
          <div className="container-max">
            <Reveal direction="right" distance={60}>
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                <Typography.Title
                  level={2}
                  style={{
                    color: 'rgba(255,255,255,0.92)',
                    marginTop: 0,
                    fontSize: screens.xs ? '1.5rem' : screens.sm ? '1.75rem' : '2rem'
                  }}
                >
                  Selected Projects
                </Typography.Title>
                <Typography.Paragraph
                  style={{
                    color: 'rgba(255,255,255,0.68)',
                    fontSize: screens.xs ? 14 : 16,
                    lineHeight: 1.6
                  }}
                >
                  Personal projects and side work.
                </Typography.Paragraph>
              </Space>
            </Reveal>

            <Reveal direction="glow" delay={0.15}>
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
                            <Stagger delay={0.04}>
                              <Space wrap size={screens.xs ? 6 : 8} style={{ width: '100%' }}>
                                <Typography.Text
                                  strong
                                  style={{
                                    color: 'rgba(255,255,255,0.95)',
                                    fontSize: screens.xs ? 14 : 15,
                                    flex: 1,
                                    minWidth: 0,
                                    wordBreak: 'break-word'
                                  }}
                                >
                                  {p.title}
                                </Typography.Text>
                                <Tag
                                  color="cyan"
                                  style={{
                                    fontSize: screens.xs ? 11 : 12,
                                    borderRadius: 4,
                                    border: '1px solid rgba(34, 211, 238, 0.3)',
                                    maxWidth: '100%',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word'
                                  }}
                                >
                                  {p.description}
                                </Tag>
                              </Space>
                            </Stagger>
                          ),
                          children: (
                            <Stagger delay={0.04}>
                              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                                <List
                                  size="small"
                                  dataSource={p.bullets}
                                  renderItem={(b) => (
                                    <List.Item>
                                      <Space size={screens.xs ? 8 : 12}>
                                        <RocketOutlined style={{ color: '#22d3ee', fontSize: screens.xs ? 14 : 16 }} />
                                        <Typography.Text
                                          style={{
                                            color: 'rgba(255,255,255,0.82)',
                                            fontSize: screens.xs ? 13 : 14,
                                            lineHeight: 1.6
                                          }}
                                        >
                                          {b}
                                        </Typography.Text>
                                      </Space>
                                    </List.Item>
                                  )}
                                />
                                <div>
                                  {p.tags.map((t) => (
                                    <Tag
                                      key={t}
                                      style={{
                                        marginBottom: 8,
                                        maxWidth: '100%',
                                        whiteSpace: 'normal',
                                        wordBreak: 'break-word'
                                      }}
                                    >
                                      {t}
                                    </Tag>
                                  ))}
                                </div>
                              </Space>
                            </Stagger>
                          ),
                        }))}
                      />
                    ),
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>

        <div id="tech" className="section">
          <div className="container-max">
            <Reveal direction="rotate">
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                <Typography.Title
                  level={2}
                  style={{
                    color: 'rgba(255,255,255,0.92)',
                    marginTop: 0,
                    fontSize: screens.xs ? '1.5rem' : screens.sm ? '1.75rem' : '2rem'
                  }}
                >
                  Tech Stack
                </Typography.Title>
                <Typography.Paragraph
                  style={{
                    color: 'rgba(255,255,255,0.68)',
                    fontSize: screens.xs ? 14 : 16,
                    lineHeight: 1.6
                  }}
                >
                  Organized by domain.
                </Typography.Paragraph>
              </Space>
            </Reveal>

            <Reveal direction="scale" delay={0.1}>
              <Collapse
                items={techStack.map((c) => ({
                  key: c.category,
                  label: (
                    <Stagger delay={0.04}>
                      <Space size={screens.xs ? 6 : 8} style={{ width: '100%', flexWrap: 'wrap' }}>
                        <CodeOutlined style={{ fontSize: screens.xs ? 14 : 16 }} />
                        <Typography.Text
                          style={{
                            color: 'rgba(255,255,255,0.90)',
                            fontSize: screens.xs ? 13 : 14,
                            flex: 1
                          }}
                        >
                          {c.category}
                        </Typography.Text>
                        <Tag color="cyan" style={{ fontSize: screens.xs ? 11 : 12 }}>
                          {c.items.length} items
                        </Tag>
                      </Space>
                    </Stagger>
                  ),
                  children: (
                    <Stagger delay={0.04}>
                      <Flex wrap="wrap" gap={8}>
                        {c.items.map((i) => (
                          <Tag
                            key={i}
                            color="default"
                            style={{
                              fontSize: screens.xs ? 11 : 12,
                              borderRadius: 4,
                              padding: screens.xs ? '2px 8px' : '4px 10px',
                              margin: screens.xs ? '2px' : '4px'
                            }}
                          >
                            {i}
                          </Tag>
                        ))}
                      </Flex>
                    </Stagger>
                  ),
                }))}
              />
            </Reveal>
          </div>
        </div>

        <div id="stats" className="section">
          <div className="container-max">
            <Reveal direction="blur">
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                <Typography.Title
                  level={2}
                  style={{
                    color: 'rgba(255,255,255,0.92)',
                    marginTop: 0,
                    fontSize: screens.xs ? '1.5rem' : screens.sm ? '1.75rem' : '2rem'
                  }}
                >
                  GitHub & LeetCode Stats
                </Typography.Title>
                <Typography.Paragraph
                  style={{
                    color: 'rgba(255,255,255,0.68)',
                    fontSize: screens.xs ? 14 : 16,
                    lineHeight: 1.6
                  }}
                >
                  Live stat cards loaded as images.
                </Typography.Paragraph>
              </Space>
            </Reveal>

            <Reveal direction="glow" delay={0.1}>
              <Tabs
                items={[
                  {
                    key: 'leetcode',
                    label: 'LeetCode',
                    children: (
                      <Reveal direction="scale">
                        <Image
                          src={stats.leetcode.cardUrl}
                          alt="LeetCode statistics"
                          style={{
                            maxWidth: 820,
                            width: '100%',
                            borderRadius: screens.xs ? 12 : 16,
                            overflow: 'hidden'
                          }}
                        />
                      </Reveal>
                    ),
                  },
                  {
                    key: 'github-streak',
                    label: 'GitHub Streak',
                    children: (
                      <Reveal direction="scale" delay={0.05}>
                        <Image
                          src={stats.github.streakUrl}
                          alt="GitHub streak"
                          style={{
                            maxWidth: 820,
                            width: '100%',
                            borderRadius: screens.xs ? 12 : 16,
                            overflow: 'hidden'
                          }}
                        />
                      </Reveal>
                    ),
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>

        <div id="education" className="section">
          <div className="container-max">
            <Reveal direction="left" distance={50}>
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                <Typography.Title
                  level={2}
                  style={{
                    color: 'rgba(255,255,255,0.92)',
                    marginTop: 0,
                    fontSize: screens.xs ? '1.5rem' : screens.sm ? '1.75rem' : '2rem'
                  }}
                >
                  Education
                </Typography.Title>
                <Typography.Paragraph
                  style={{
                    color: 'rgba(255,255,255,0.68)',
                    fontSize: screens.xs ? 14 : 16,
                    lineHeight: 1.6
                  }}
                >
                  Timeline view.
                </Typography.Paragraph>
              </Space>
            </Reveal>

            <Reveal direction="bounce" delay={0.1}>
              <Timeline
                items={education.map((e) => ({
                  children: (
                    <Stagger delay={0.05}>
                      <Space
                        direction="vertical"
                        size={screens.xs ? 4 : 6}
                        style={{
                          width: '100%',
                          maxWidth: '100%'
                        }}
                      >
                        <Typography.Text
                          strong
                          style={{
                            color: 'rgba(255,255,255,0.92)',
                            fontSize: screens.xs ? 14 : 15,
                            lineHeight: 1.5,
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                            maxWidth: '100%'
                          }}
                        >
                          {e.degree}
                        </Typography.Text>
                        <Typography.Text
                          style={{
                            color: 'rgba(255,255,255,0.72)',
                            fontSize: screens.xs ? 12 : 13,
                            lineHeight: 1.6,
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                            maxWidth: '100%'
                          }}
                        >
                          {e.institution} • {e.period}
                          {e.description ? ` • ${e.description}` : ''}
                        </Typography.Text>
                      </Space>
                    </Stagger>
                  ),
                }))}
              />
            </Reveal>
          </div>
        </div>

        <div id="contact" className="section">
          <div className="container-max">
            <Reveal direction="glow">
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                <Typography.Title
                  level={2}
                  style={{
                    color: 'rgba(255,255,255,0.92)',
                    marginTop: 0,
                    fontSize: screens.xs ? '1.5rem' : screens.sm ? '1.75rem' : '2rem'
                  }}
                >
                  Get In Touch
                </Typography.Title>
                <Typography.Paragraph
                  style={{
                    color: 'rgba(255,255,255,0.68)',
                    fontSize: screens.xs ? 14 : 16,
                    lineHeight: 1.6
                  }}
                >
                  Fastest ways to reach me.
                </Typography.Paragraph>
              </Space>
            </Reveal>

            <List
              bordered
              dataSource={contacts}
              renderItem={(c) => (
                <Reveal direction="right" distance={30}>
                  <List.Item
                    style={{
                      borderRadius: screens.xs ? 8 : 12,
                      marginBottom: screens.xs ? 8 : 12,
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255,255,255,0.02)',
                      transition: 'all 0.2s ease'
                    }}
                    actions={[
                      <Button
                        key="open"
                        type="link"
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: screens.xs ? 13 : 14,
                          fontWeight: 500,
                          color: 'rgba(34, 211, 238, 0.9)'
                        }}
                      >
                        Open
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={
                        <Badge
                          color="cyan"
                          style={{
                            width: screens.xs ? 8 : 10,
                            height: screens.xs ? 8 : 10
                          }}
                        />
                      }
                      title={
                        <Space size={screens.xs ? 8 : 10}>
                          <span style={{ fontSize: screens.xs ? 16 : 18 }}>
                            {contactIcon(c.name)}
                          </span>
                          <Typography.Text
                            strong
                            style={{
                              color: 'rgba(255,255,255,0.95)',
                              fontSize: screens.xs ? 15 : 16
                            }}
                          >
                            {c.name}
                          </Typography.Text>
                        </Space>
                      }
                      description={
                        <Typography.Text
                          style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: screens.xs ? 13 : 14,
                            marginTop: screens.xs ? 4 : 6
                          }}
                        >
                          {c.description}
                        </Typography.Text>
                      }
                    />
                  </List.Item>
                </Reveal>
              )}
            />
          </div>
        </div>

      </Layout.Content>

      <Layout.Footer
        style={{
          background: 'transparent',
          color: 'rgba(255,255,255,0.55)',
          padding: screens.xs ? '32px 16px' : '40px 16px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          marginTop: screens.xs ? 32 : 48
        }}
      >
        <div className="container-max">
          <Flex
            justify="space-between"
            align={screens.xs ? "flex-start" : "center"}
            wrap="wrap"
            gap={screens.xs ? 16 : 12}
            vertical={screens.xs}
          >
            <Typography.Text
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: screens.xs ? 13 : 14
              }}
            >
              © {new Date().getFullYear()} Afik Yefet
            </Typography.Text>
            <Space
              wrap
              size={screens.xs ? 8 : 12}
              style={{ width: screens.xs ? '100%' : 'auto' }}
            >
              {contacts.map((c) => (
                <Button
                  key={c.name}
                  type="link"
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: screens.xs ? 13 : 14,
                    padding: screens.xs ? '4px 8px' : undefined,
                    color: 'rgba(255,255,255,0.7)'
                  }}
                >
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
