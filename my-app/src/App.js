import './App.css';
import React from 'react'

function App() {
  const [files, setFiles] = React.useState(["studio", "src", "financial_analyst_crew", "conf"]);
  const breadcrumbData = breadcrumbText(files)
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '529.6px', marginTop: '32px', overflowX: 'auto' }}>
        {FullBreadCrumb(breadcrumbData)}
        <div data-testid="file-system-explorer" style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgb(28, 28, 28)', width: '100%', height: '483.6px', borderTop: '0px none rgb(0, 0, 0)', overflow: 'hidden', position: 'relative', WebkitBoxAlign: 'stretch', alignItems: 'stretch', maxWidth: '1536px', WebkitBoxFlex: 1, flexGrow: 1 }}>
          <div style={{ display: 'flex', flexFlow: 'row nowrap', width: '100%', maxWidth: '100%', position: 'relative', height: '483.6px', WebkitBoxAlign: 'stretch', alignItems: 'stretch', zIndex: 99, WebkitBoxPack: 'start', justifyContent: 'flex-start', overflow: 'hidden', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', flexFlow: 'row nowrap', width: 'auto', minWidth: '100%', WebkitBoxPack: 'start', justifyContent: 'flex-start', position: 'static', overflow: 'auto hidden', WebkitBoxAlign: 'stretch', alignItems: 'stretch', top: '0px', left: '0px', height: '483.6px', zIndex: 99, boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', flexDirection: 'column', width: '240px', position: 'absolute', boxSizing: 'border-box', zIndex: 1000, top: '1px', left: '0px', borderRight: '0.8px solid rgb(54, 54, 54)' }}>
                <div style={{ display: 'flex', flexDirection: 'row', height: 'auto', padding: '23.6px 14px 23.6px 8px', color: 'rgb(105, 105, 105)', fontSize: '12px', WebkitBoxAlign: 'center', alignItems: 'center', width: '100%', WebkitBoxPack: 'justify', justifyContent: 'space-between', gap: '16px', whiteSpace: 'nowrap', boxSizing: 'border-box' }}><span aria-label="14 in all folders" style={{ boxSizing: 'border-box', cursor: 'auto' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                    <div data-testid="row-icon-files" style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', gap: '4px', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'start', justifyContent: 'flex-start', width: '100%' }}><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FolderOutlinedIcon" style={{ boxSizing: 'border-box', height: '17px', width: '17px', userSelect: 'none', display: 'block', fill: 'rgb(105, 105, 105)', flexShrink: 0, transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s', fontSize: '21px', strokeWidth: '0.5px', stroke: 'rgb(28, 28, 28)' }}>
                      <path d="m9.17 6 2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" style={{ boxSizing: 'border-box' }}></path>
                    </svg>
                      <p style={{ boxSizing: 'border-box', margin: '-1px 0px 0px', letterSpacing: '-0.18px', lineHeight: 'normal', fontFamily: 'Inter, Roboto, sans-serif', fontSize: '12px', fontWeight: 500 }}>14 files</p>
                    </div>
                  </div>
                </span><span style={{ boxSizing: 'border-box', cursor: 'auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '4px', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
                      <div data-testid="row-icon-storage" style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', gap: '4px', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'start', justifyContent: 'flex-start', width: '100%' }}><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StorageOutlinedIcon" style={{ boxSizing: 'border-box', height: '17px', width: '17px', userSelect: 'none', display: 'block', fill: 'rgb(105, 105, 105)', flexShrink: 0, transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s', fontSize: '21px', strokeWidth: '0.5px', stroke: 'rgb(28, 28, 28)' }}>
                        <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" style={{ boxSizing: 'border-box' }}></path>
                      </svg>
                        <p style={{ boxSizing: 'border-box', margin: '-1px 0px 0px', letterSpacing: '-0.18px', lineHeight: 'normal', fontFamily: 'Inter, Roboto, sans-serif', fontSize: '12px', fontWeight: 500 }}>426.27 KB</p>
                      </div>
                    </div>
                  </span></div>
              </div>
              <div data-collab-id="file-container" data-testid="file-container" style={{ height: '483.6px', zIndex: 100, borderRight: '0.8px solid rgb(54, 54, 54)', boxSizing: 'border-box', width: '480px', minWidth: '480px', paddingTop: '64px', background: 'rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box' }}>
                <div style={{ boxSizing: 'border-box', color: 'rgb(250, 250, 250)', height: '419.6px', minWidth: '100px', display: 'flex' }}>
                  {NewColumn()}
                  {NewColumn()}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', width: '240px', position: 'absolute', boxSizing: 'border-box', zIndex: 1000, top: '1px', left: '0px', borderRight: '0.8px solid rgb(54, 54, 54)' }}></div>
              <div data-collab-id="file-container" data-testid="file-container" style={{ display: 'none', height: '100%', zIndex: 99, borderRight: '0.8px solid rgb(54, 54, 54)', boxSizing: 'border-box', width: '480px', minWidth: '480px', paddingTop: '64px', background: 'rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box' }}>
                <div style={{ boxSizing: 'border-box', color: 'rgb(250, 250, 250)', height: '100%', minWidth: '100px', display: 'flex' }}>
                  <div style={{ position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100%', width: '240px', minWidth: '240px', maxWidth: '240px', boxShadow: 'rgb(54, 54, 54) -1px 0px 0px 0px inset' }}>
                    <div style={{ overflow: 'visible', height: '0px', width: '0px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div aria-label="grid" aria-readonly="true" role="grid" tabIndex="0" style={{ boxSizing: 'border-box', direction: 'ltr', height: '0px', position: 'relative', width: '0px', willChange: 'transform', overflow: 'auto', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                    <div style={{ content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', overflow: 'hidden', zIndex: -1, animation: '0.001s ease 0s 1 normal none running resizeanim', visibility: 'hidden', opacity: 0, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                        <div style={{ width: '1px', height: '1px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                      </div>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                  </div>
                  <div style={{ position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100%', width: '240px', minWidth: '240px', maxWidth: '240px', boxShadow: 'rgb(54, 54, 54) -1px 0px 0px 0px inset' }}>
                    <div style={{ overflow: 'visible', height: '0px', width: '0px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div aria-label="grid" aria-readonly="true" role="grid" tabIndex="0" style={{ boxSizing: 'border-box', direction: 'ltr', height: '0px', position: 'relative', width: '0px', willChange: 'transform', overflow: 'auto', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                    <div style={{ content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', overflow: 'hidden', zIndex: -1, animation: '0.001s ease 0s 1 normal none running resizeanim', visibility: 'hidden', opacity: 0, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                        <div style={{ width: '1px', height: '1px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                      </div>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', width: '240px', position: 'absolute', boxSizing: 'border-box', zIndex: 1000, top: '1px', left: '0px', borderRight: '0.8px solid rgb(54, 54, 54)' }}></div>
              <div data-collab-id="file-container" data-testid="file-container" style={{ display: 'none', height: '100%', zIndex: 98, borderRight: '0.8px solid rgb(54, 54, 54)', boxSizing: 'border-box', width: '480px', minWidth: '480px', paddingTop: '64px', background: 'rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box' }}>
                <div style={{ boxSizing: 'border-box', color: 'rgb(250, 250, 250)', height: '100%', minWidth: '100px', display: 'flex' }}>
                  <div style={{ position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100%', width: '240px', minWidth: '240px', maxWidth: '240px', boxShadow: 'rgb(54, 54, 54) -1px 0px 0px 0px inset' }}>
                    <div style={{ overflow: 'visible', height: '0px', width: '0px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div aria-label="grid" aria-readonly="true" role="grid" tabIndex="0" style={{ boxSizing: 'border-box', direction: 'ltr', height: '0px', position: 'relative', width: '0px', willChange: 'transform', overflow: 'auto', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                    <div style={{ content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', overflow: 'hidden', zIndex: -1, animation: '0.001s ease 0s 1 normal none running resizeanim', visibility: 'hidden', opacity: 0, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                        <div style={{ width: '1px', height: '1px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                      </div>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                  </div>
                  <div style={{ position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100%', width: '240px', minWidth: '240px', maxWidth: '240px', boxShadow: 'rgb(54, 54, 54) -1px 0px 0px 0px inset' }}>
                    <div style={{ overflow: 'visible', height: '0px', width: '0px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div aria-label="grid" aria-readonly="true" role="grid" tabIndex="0" style={{ boxSizing: 'border-box', direction: 'ltr', height: '0px', position: 'relative', width: '0px', willChange: 'transform', overflow: 'auto', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                    <div style={{ content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', overflow: 'hidden', zIndex: -1, animation: '0.001s ease 0s 1 normal none running resizeanim', visibility: 'hidden', opacity: 0, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                        <div style={{ width: '1px', height: '1px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                      </div>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', width: '240px', position: 'absolute', boxSizing: 'border-box', zIndex: 1000, top: '1px', left: '0px', borderRight: '0.8px solid rgb(54, 54, 54)' }}></div>
              <div data-collab-id="file-container" data-testid="file-container" style={{ display: 'none', height: '100%', zIndex: 97, borderRight: '0.8px solid rgb(54, 54, 54)', boxSizing: 'border-box', width: '480px', minWidth: '480px', paddingTop: '64px', background: 'rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box' }}>
                <div style={{ boxSizing: 'border-box', color: 'rgb(250, 250, 250)', height: '100%', minWidth: '100px', display: 'flex' }}>
                  <div style={{ position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100%', width: '240px', minWidth: '240px', maxWidth: '240px', boxShadow: 'rgb(54, 54, 54) -1px 0px 0px 0px inset' }}>
                    <div style={{ overflow: 'visible', height: '0px', width: '0px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div aria-label="grid" aria-readonly="true" role="grid" tabIndex="0" style={{ boxSizing: 'border-box', direction: 'ltr', height: '0px', position: 'relative', width: '0px', willChange: 'transform', overflow: 'auto', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                    <div style={{ content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', overflow: 'hidden', zIndex: -1, animation: '0.001s ease 0s 1 normal none running resizeanim', visibility: 'hidden', opacity: 0, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                        <div style={{ width: '1px', height: '1px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                      </div>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                  </div>
                  <div style={{ position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100%', width: '240px', minWidth: '240px', maxWidth: '240px', boxShadow: 'rgb(54, 54, 54) -1px 0px 0px 0px inset' }}>
                    <div style={{ overflow: 'visible', height: '0px', width: '0px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div aria-label="grid" aria-readonly="true" role="grid" tabIndex="0" style={{ boxSizing: 'border-box', direction: 'ltr', height: '0px', position: 'relative', width: '0px', willChange: 'transform', overflow: 'auto', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                    <div style={{ content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', overflow: 'hidden', zIndex: -1, animation: '0.001s ease 0s 1 normal none running resizeanim', visibility: 'hidden', opacity: 0, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
                        <div style={{ width: '1px', height: '1px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                      </div>
                      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-collab-id="file-view-nav" style={{ display: 'flex', flexDirection: 'row', placeContent: 'center space-between', WebkitBoxAlign: 'center', alignItems: 'center', padding: '8px 16px 8px 256px', minHeight: '66px', height: '66px', maxHeight: '66px', width: '100%', WebkitBoxPack: 'justify', position: 'absolute', zIndex: 999, left: '0px', top: '0px', boxSizing: 'border-box', background: 'rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box', borderBottom: '0.8px solid rgb(54, 54, 54)', borderTop: '0.8px solid rgb(54, 54, 54)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '80%', gap: '16px', justifyContent: 'left', boxSizing: 'border-box' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', flex: '1 1 0%', gap: '16px', color: 'rgb(105, 105, 105)', fontSize: '12px', whiteSpace: 'nowrap', boxSizing: 'border-box' }}><span aria-label="1  file in the selected folder" style={{ boxSizing: 'border-box', cursor: 'auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content', minWidth: '70px', justifyContent: 'left', boxSizing: 'border-box' }}>
                      <div data-testid="folder-number-of-files" style={{ display: 'flex', flexDirection: 'column', width: 'max-content', fontWeight: 500, boxSizing: 'border-box' }}>1 file</div>
                    </div>
                  </span><span aria-label="51 B in the selected folder" style={{ boxSizing: 'border-box', cursor: 'auto' }}>
                      <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content', minWidth: '70px', justifyContent: 'left', boxSizing: 'border-box' }}>
                        <div data-testid="folder-size" style={{ display: 'flex', flexDirection: 'column', width: 'max-content', fontWeight: 500, boxSizing: 'border-box' }}>51 B</div>
                      </div>
                    </span><span style={{ boxSizing: 'border-box', cursor: 'auto' }}>
                      <div style={{ display: 'flex', flexDirection: 'row', minWidth: '150px', width: 'max-content', justifyContent: 'left', boxSizing: 'border-box' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content', gap: '4px', fontWeight: 500, boxSizing: 'border-box' }}>Modified: <span aria-label="" style={{ boxSizing: 'border-box', cursor: 'auto' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', cursor: 'default', boxSizing: 'border-box' }}>
                            <p style={{ margin: '0px', fontWeight: 500, letterSpacing: '-0.18px', lineHeight: 'normal', fontFamily: 'Inter, Roboto, sans-serif', color: 'rgb(105, 105, 105)', fontSize: '12px', boxSizing: 'border-box' }}>22 days ago</p>
                          </div>
                        </span></div>
                      </div>
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'row', cursor: 'pointer', boxSizing: 'border-box' }}></div>
                  </div>
                </div>
                <div data-collab-id="file-system-layouts" style={{ display: 'flex', flexDirection: 'row', width: 'auto', gap: '8px', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
                  <hr style={{ margin: '0px', flexShrink: 0, borderWidth: '0px 0.8px 0px 0px', borderStyle: 'solid', borderColor: 'rgb(54, 54, 54)', height: 'auto', alignSelf: 'stretch', boxSizing: 'border-box' }} /><span aria-label="View files in columns" style={{ boxSizing: 'border-box', cursor: 'auto' }}>
                    <div data-testid="layout-icon-column" style={{ display: 'flex', flexDirection: 'column', borderRadius: '4px', padding: '4px', color: 'rgb(180, 90, 255)', backgroundColor: 'rgb(49, 49, 49)', cursor: 'pointer', transition: 'all 0.2s ease-in-out 0s', boxSizing: 'border-box' }}>
                      <div data-testid="row-icon-column" style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', gap: '0px', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', width: '100%' }}><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ViewWeekOutlinedIcon" style={{ boxSizing: 'border-box', userSelect: 'none', width: '1em', height: '21px', display: 'block', fill: 'rgb(180, 90, 255)', flexShrink: 0, transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s', fontSize: '21px', strokeWidth: '0.5px', stroke: 'rgb(28, 28, 28)' }}>
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z" style={{ boxSizing: 'border-box' }}></path>
                      </svg></div>
                    </div>
                  </span><span aria-label="View files in list" style={{ boxSizing: 'border-box', cursor: 'auto' }}>
                    <div data-testid="layout-icon-list" style={{ display: 'flex', flexDirection: 'column', borderRadius: '4px', padding: '4px', color: 'rgb(156, 156, 156)', backgroundColor: 'rgba(0, 0, 0, 0)', cursor: 'pointer', transition: 'all 0.2s ease-in-out 0s', boxSizing: 'border-box' }}>
                      <div data-testid="row-icon-list" style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', gap: '0px', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', width: '100%' }}><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatListBulletedIcon" style={{ boxSizing: 'border-box', userSelect: 'none', width: '1em', height: '21px', display: 'block', fill: 'rgb(156, 156, 156)', flexShrink: 0, transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s', fontSize: '21px', strokeWidth: '0.5px', stroke: 'rgb(28, 28, 28)' }}>
                        <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" style={{ boxSizing: 'border-box' }}></path>
                      </svg></div>
                    </div>
                  </span><span aria-label="List files optimized for image datasets" style={{ boxSizing: 'border-box', cursor: 'auto' }}>
                    <div data-testid="layout-icon-image-grid" style={{ display: 'flex', flexDirection: 'column', borderRadius: '4px', padding: '4px', color: 'rgb(156, 156, 156)', backgroundColor: 'rgba(0, 0, 0, 0)', cursor: 'pointer', transition: 'all 0.2s ease-in-out 0s', boxSizing: 'border-box' }}>
                      <div data-testid="row-icon-image-grid" style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', gap: '0px', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', width: '100%' }}><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BurstModeOutlinedIcon" style={{ boxSizing: 'border-box', userSelect: 'none', width: '1em', height: '21px', display: 'block', fill: 'rgb(156, 156, 156)', flexShrink: 0, transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s', fontSize: '21px', strokeWidth: '0.5px', stroke: 'rgb(28, 28, 28)' }}>
                        <path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 12H11V7h10v10zm-3.57-4.38-2 2.57L14 13.47l-2 2.52h8z" style={{ boxSizing: 'border-box' }}></path>
                      </svg></div>
                    </div>
                  </span><span aria-label="View files in a grid" style={{ boxSizing: 'border-box', cursor: 'auto' }}>
                    <div data-testid="layout-icon-grid" style={{ display: 'flex', flexDirection: 'column', borderRadius: '4px', padding: '4px', color: 'rgb(156, 156, 156)', backgroundColor: 'rgba(0, 0, 0, 0)', cursor: 'pointer', transition: 'all 0.2s ease-in-out 0s', boxSizing: 'border-box' }}>
                      <div data-testid="row-icon-grid" style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', gap: '0px', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', width: '100%' }}><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridViewOutlinedIcon" style={{ boxSizing: 'border-box', userSelect: 'none', width: '1em', height: '21px', display: 'block', fill: 'rgb(156, 156, 156)', flexShrink: 0, transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s', fontSize: '21px', strokeWidth: '0.5px', stroke: 'rgb(28, 28, 28)' }}>
                        <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" style={{ boxSizing: 'border-box' }}></path>
                      </svg></div>
                    </div>
                  </span>
                </div>
              </div>
              <div draggable="false" data-collab-id="file-view" data-testid="file-view" style={{ display: 'flex', flexDirection: 'column', width: 'auto', position: 'relative', zIndex: 98, WebkitBoxFlex: 1, flexGrow: 1, minWidth: '0px', boxSizing: 'border-box' }}>
                <hr style={{ margin: '0px', flexShrink: 0, borderWidth: '0px 0px 0.8px', borderStyle: 'solid', borderColor: 'rgb(54, 54, 54)', display: 'none', boxSizing: 'border-box' }} />
                <div data-testid="folder-content-list" tabIndex="0" style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingTop: '64px', height: '483.6px', outline: 'rgb(0, 0, 0) none 0px', boxSizing: 'border-box' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;





function FullBreadCrumb(breadcrumbData) {
  return <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgb(28, 28, 28)', paddingLeft: '8px', paddingRight: '8px', justifyContent: 'left', marginBottom: '8px', minHeight: '38px', color: 'rgb(181, 181, 181)', fontSize: '13px', overflowWrap: 'anywhere' }}>
    <div data-testid="select-file-breadcrumb" style={{ display: 'flex', flexDirection: 'row', width: '100%', WebkitBoxAlign: 'center', alignItems: 'center', gap: '8px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '8px', paddingRight: '8px', borderRadius: '16px', WebkitBoxAlign: 'center', alignItems: 'center', border: '0.8px solid rgb(3, 3, 3)' }}>
        <div style={{ display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center' }}>
          <nav style={{ margin: '0px', fontWeight: 400, fontSize: '16px', letterSpacing: '-0.24px', lineHeight: 'normal', fontFamily: 'Inter, Roboto, sans-serif', color: 'rgb(181, 181, 181)' }}>
            <ol style={{ display: 'flex', flexWrap: 'wrap', WebkitBoxAlign: 'center', alignItems: 'center', padding: '0px', margin: '0px', listStyle: 'outside none none' }}>
              {breadcrumbData}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>;
}

function NewColumn() {
  return <div style={{ position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '419.6px', width: '240px', minWidth: '240px', maxWidth: '240px', boxShadow: 'rgb(54, 54, 54) -1px 0px 0px 0px inset' }}>
    <div style={{ overflow: 'visible', height: '0px', width: '0px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
      <div aria-label="grid" aria-readonly="true" role="grid" tabIndex="0" style={{ boxSizing: 'border-box', direction: 'ltr', height: '420px', position: 'relative', width: '240px', willChange: 'transform', overflow: 'hidden', outline: 'rgb(250, 250, 250) none 0px' }}>
        <div role="rowgroup" style={{ width: 'auto', height: '390px', maxWidth: '240px', maxHeight: '144px', overflow: 'auto hidden', position: 'relative', boxSizing: 'border-box', minHeight: 'calc(100% - 30px)', transform: 'matrix(1, 0, 0, 1, 0, 0)', outline: 'rgb(250, 250, 250) none 0px', overflowX: 'auto !important' }}>
          {tile("hello", 0, 0, false)}
          {tile("hello", 1, 1, true)}
          {tile("hello", 2, 2, true)}
        </div>
      </div>
    </div>
    <div style={{ content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '419.6px', width: '100%', overflow: 'hidden', zIndex: -1, animation: '0.001s ease 0s 1 normal none running resizeanim', visibility: 'hidden', opacity: 0, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '419.6px', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}>
        <div style={{ width: '241px', height: '421px', boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
      </div>
      <div style={{ background: 'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box', overflow: 'auto', content: '" "', display: 'block', position: 'absolute', top: '0px', left: '0px', height: '419.6px', width: '100%', zIndex: -1, boxSizing: 'border-box', outline: 'rgb(250, 250, 250) none 0px' }}></div>
    </div>
  </div>;
}

function breadcrumbText(files) {
  const content = (file) => <li className="MuiBreadcrumbs-li"><a href="?path" style={{ margin: '0px', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '24px', textDecoration: 'none solid rgb(180, 90, 255)', color: 'rgb(180, 90, 255)', transition: 'all 0.3s ease-in-out 0s', padding: '6px 4px', borderRadius: '4px' }}>{file}</a></li>
  const breaker = <li aria-hidden="true" style={{ display: 'flex', userSelect: 'none', marginLeft: '1px', marginRight: '1px' }}>/</li>
  const breadcrumb = files.map((file, index) => {
    if (index === files.length - 1) return content(file)
    else return [content(file), breaker]
  })
  return breadcrumb
}

const TextColor = {
  STRONG: "rgb(255, 255, 255)",
  NORMAL: "rgb(181, 181, 181)",
  LIGHT: "rgb(156, 156, 156)"
}

function NextIcon() {
  return <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', maxWidth: '172px', outline: 'rgb(156, 156, 156) none 0px' }}><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIosIcon" style={{ boxSizing: 'border-box', userSelect: 'none', height: '21px', display: 'block', fill: 'rgb(156, 156, 156)', flexShrink: 0, transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s', fontSize: '21px', width: '12px', outline: 'rgb(156, 156, 156) none 0px' }}>
    <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" style={{ boxSizing: 'border-box', outline: 'rgb(156, 156, 156) none 0px' }}></path>
  </svg></div>
}

function tile(title, index = 0, selected = 0, next = true) {
  const topPixel = index * 24;

  let textColor;
  if (selected === 0) textColor = TextColor.LIGHT
  else if (selected === 1) textColor = TextColor.NORMAL
  else textColor = TextColor.STRONG

  const backgroundColorCSS = (selected === 2) ? "rgb(31, 8, 64) none repeat scroll 0% 0% / auto padding-box border-box" : "";

  return <div data-testid="folder-nav-tree-item-.lightning_studio" style={{ display: 'flex', flexDirection: 'row', minHeight: '24px', maxHeight: '24px', padding: '3px 4px 3px 16px', width: '100%', fontSize: '12px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', WebkitBoxPack: 'justify', placeContent: 'center space-between', marginRight: '1px', zIndex: 99, fontWeight: 500, color: 'rgb(156, 156, 156)', height: '24px', left: '0px', position: 'absolute', top: '' + topPixel + 'px', cursor: 'pointer', verticalAlign: 'middle', lineHeight: '21px', animation: '0s ease-in-out 0.5s 1 normal forwards running fadeInCell', opacity: 1, boxSizing: 'border-box', minWidth: 'calc(100% - 2px)', outline: 'rgb(156, 156, 156) none 0px, ', background: backgroundColorCSS }}>
    <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', WebkitBoxPack: 'start', placeContent: 'center flex-start', maxWidth: '172px', outline: 'rgb(156, 156, 156) none 0px' }}><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FolderIcon" style={{ boxSizing: 'border-box', userSelect: 'none', display: 'block', fill: 'rgb(156, 156, 156)', flexShrink: 0, transition: 'fill 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s', fontSize: '21px', width: '18px', height: '18px', marginRight: '6px', outline: 'rgb(156, 156, 156) none 0px' }}>
      {(selected === 2) ?
        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" style={{ boxSizing: 'border-box', outline: 'rgb(156, 156, 156) none 0px' }}></path>
        : <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" style={{ boxSizing: 'border-box', outline: 'rgb(156, 156, 156) none 0px' }}></path>
      }
    </svg>
      <p style={{ boxSizing: 'border-box', margin: '0px', letterSpacing: '-0.18px', lineHeight: 'normal', fontFamily: 'Inter, Roboto, sans-serif', fontSize: '12px', maxWidth: '100%', paddingTop: '1px', display: 'block', color: textColor, overflowX: 'auto', whiteSpace: 'nowrap', outline: textColor + ' none 0px' }}>
        <div style={{ boxSizing: 'border-box', WebkitBoxFlex: 1, flexGrow: 1, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', outline: textColor + ' none 0px' }}><span aria-label="" style={{ boxSizing: 'border-box', cursor: 'pointer', width: 'calc(100% - 48px)', outline: textColor + ' none 0px' }}>{title}</span></div>
      </p>
    </div>
    {next && <NextIcon />}
  </div>
}

