import { useState } from 'react';
import { useApp } from '../lib/AppContext';
import { missions, getPhaseInfo } from '../data/missions';
import {
  Target,
  CheckCircle,
  Lock,
  ChevronRight,
  Zap,
  Eye,
  Lightbulb,
  Network,
  Megaphone,
  Sparkles,
} from 'lucide-react';
import type { Mission, MissionPhase } from '../types';

const phaseIcons: Record<MissionPhase, React.ReactNode> = {
  awakening: <Zap size={16} />,
  observation: <Eye size={16} />,
  deconstruction: <Lightbulb size={16} />,
  creation: <Sparkles size={16} />,
  influence: <Megaphone size={16} />,
  network: <Network size={16} />,
  campaign: <Target size={16} />,
};

export function MissionPanel() {
  const { theme, userProgress, updateProgress, addConsoleMessage } = useApp();
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [expandedPhase, setExpandedPhase] = useState<MissionPhase>('awakening');

  const phases: MissionPhase[] = [
    'awakening',
    'observation',
    'deconstruction',
    'creation',
    'influence',
    'network',
    'campaign',
  ];

  const getMissionsByPhase = (phase: MissionPhase) =>
    missions.filter((m) => m.phase === phase);

  const isMissionUnlocked = (mission: Mission): boolean => {
    if (mission.phase === 'awakening') return true;
    const phaseIndex = phases.indexOf(mission.phase);
    const prevPhase = phases[phaseIndex - 1];
    const prevMissions = getMissionsByPhase(prevPhase);
    return prevMissions.every((m) => userProgress.completedMissions.includes(m.id));
  };

  const handleMissionSelect = (mission: Mission) => {
    if (isMissionUnlocked(mission)) {
      setSelectedMission(mission);
      addConsoleMessage({
        type: 'system',
        message: `Mission sélectionnée: ${mission.title}`,
      });
    }
  };

  const handleObjectiveComplete = (missionId: string, objectiveId: string) => {
    const mission = missions.find((m) => m.id === missionId);
    if (!mission) return;

    const updatedMissions = missions.map((m) => {
      if (m.id === missionId) {
        return {
          ...m,
          objectives: m.objectives.map((obj) =>
            obj.id === objectiveId ? { ...obj, completed: true } : obj
          ),
        };
      }
      return m;
    });

    const updatedMission = updatedMissions.find((m) => m.id === missionId);
    if (updatedMission && updatedMission.objectives.every((obj) => obj.completed)) {
      updateProgress({
        ...userProgress,
        completedMissions: [...userProgress.completedMissions, missionId],
      });
      addConsoleMessage({
        type: 'revelation',
        message: `Mission accomplie: "${mission.title}" - ${mission.criticalInsight || 'Vous progressez.'}`,
      });
    }

    setSelectedMission(updatedMission || null);
  };

  const getProgressPercentage = (): number => {
    const total = missions.length;
    const completed = userProgress.completedMissions.length;
    return Math.round((completed / total) * 100);
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: theme.colors.surface,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '1rem',
          borderBottom: `1px solid ${theme.colors.border}`,
          background: theme.colors.background,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Target size={18} color={theme.colors.primary} />
          <span style={{ color: theme.colors.text, fontWeight: 600 }}>Missions</span>
        </div>
        <div
          style={{
            height: '6px',
            background: theme.colors.border,
            borderRadius: '3px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${getProgressPercentage()}%`,
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              transition: 'width 0.5s ease',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            color: theme.colors.textSecondary,
          }}
        >
          <span>Phase: {getPhaseInfo(userProgress.currentPhase).name}</span>
          <span>{getProgressPercentage()}% complete</span>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0.5rem' }}>
        {selectedMission ? (
          <div style={{ padding: '0.5rem' }}>
            <button
              onClick={() => setSelectedMission(null)}
              style={{
                background: 'transparent',
                border: 'none',
                color: theme.colors.primary,
                cursor: 'pointer',
                marginBottom: '1rem',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              Retour aux missions
            </button>

            <div
              style={{
                background: theme.colors.background,
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {phaseIcons[selectedMission.phase]}
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: getPhaseInfo(selectedMission.phase).color,
                    fontWeight: 500,
                  }}
                >
                  {getPhaseInfo(selectedMission.phase).name}
                </span>
              </div>
              <h3 style={{ color: theme.colors.text, fontSize: '1.125rem', marginBottom: '0.25rem' }}>
                {selectedMission.title}
              </h3>
              <p style={{ color: theme.colors.secondary, fontSize: '0.875rem', fontStyle: 'italic' }}>
                {selectedMission.subtitle}
              </p>
            </div>

            {selectedMission.narrative && (
              <div
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary}15, ${theme.colors.secondary}15)`,
                  borderLeft: `3px solid ${theme.colors.secondary}`,
                  padding: '1rem',
                  borderRadius: '0 8px 8px 0',
                  marginBottom: '1rem',
                  fontSize: '0.875rem',
                  color: theme.colors.text,
                  lineHeight: '1.6',
                }}
              >
                {selectedMission.narrative}
              </div>
            )}

            <p style={{ color: theme.colors.textSecondary, fontSize: '0.875rem', marginBottom: '1rem' }}>
              {selectedMission.description}
            </p>

            <h4 style={{ color: theme.colors.text, fontSize: '0.875rem', marginBottom: '0.75rem' }}>
              Objectifs
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
              {selectedMission.objectives.map((obj) => (
                <div
                  key={obj.id}
                  onClick={() => !obj.completed && handleObjectiveComplete(selectedMission.id, obj.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    background: obj.completed ? `${theme.colors.primary}20` : theme.colors.background,
                    borderRadius: '6px',
                    cursor: obj.completed ? 'default' : 'pointer',
                    transition: 'background 0.2s',
                  }}
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: `2px solid ${obj.completed ? theme.colors.primary : theme.colors.border}`,
                      background: obj.completed ? theme.colors.primary : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {obj.completed && <CheckCircle size={12} color="white" />}
                  </div>
                  <span
                    style={{
                      color: obj.completed ? theme.colors.textSecondary : theme.colors.text,
                      fontSize: '0.875rem',
                      textDecoration: obj.completed ? 'line-through' : 'none',
                      flex: 1,
                    }}
                  >
                    {obj.description}
                  </span>
                </div>
              ))}
            </div>

            {selectedMission.rewards.length > 0 && (
              <>
                <h4 style={{ color: theme.colors.text, fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                  Recompenses
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedMission.rewards.map((reward) => (
                    <div
                      key={reward.id}
                      style={{
                        background: theme.colors.secondary,
                        color: 'white',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '16px',
                        fontSize: '0.75rem',
                      }}
                    >
                      {reward.name}
                    </div>
                  ))}
                </div>
              </>
            )}

            {selectedMission.criticalInsight && (
              <div
                style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: '#fef3c7',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  color: '#92400e',
                }}
              >
                <strong>Revelation:</strong> {selectedMission.criticalInsight}
              </div>
            )}
          </div>
        ) : (
          <div>
            {phases.map((phase) => {
              const phaseMissions = getMissionsByPhase(phase);
              const phaseInfo = getPhaseInfo(phase);
              const isExpanded = expandedPhase === phase;
              const phaseCompleted = phaseMissions.every((m) =>
                userProgress.completedMissions.includes(m.id)
              );
              const phaseUnlocked =
                phase === 'awakening' ||
                getMissionsByPhase(phases[phases.indexOf(phase) - 1]).every((m) =>
                  userProgress.completedMissions.includes(m.id)
                );

              return (
                <div key={phase} style={{ marginBottom: '0.5rem' }}>
                  <button
                    onClick={() => setExpandedPhase(isExpanded ? ('' as MissionPhase) : phase)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      background: isExpanded ? `${phaseInfo.color}20` : 'transparent',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      opacity: phaseUnlocked ? 1 : 0.5,
                    }}
                  >
                    <div style={{ color: phaseInfo.color }}>{phaseIcons[phase]}</div>
                    <span style={{ flex: 1, textAlign: 'left', color: theme.colors.text, fontWeight: 500 }}>
                      {phaseInfo.name}
                    </span>
                    {phaseCompleted && <CheckCircle size={16} color={theme.colors.primary} />}
                    {!phaseUnlocked && <Lock size={14} color={theme.colors.textSecondary} />}
                    <ChevronRight
                      size={16}
                      color={theme.colors.textSecondary}
                      style={{
                        transform: isExpanded ? 'rotate(90deg)' : 'none',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </button>

                  {isExpanded && phaseUnlocked && (
                    <div style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                      {phaseMissions.map((mission) => {
                        const isCompleted = userProgress.completedMissions.includes(mission.id);
                        const isUnlocked = isMissionUnlocked(mission);

                        return (
                          <button
                            key={mission.id}
                            onClick={() => handleMissionSelect(mission)}
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              padding: '0.5rem 0.75rem',
                              background: isCompleted ? `${theme.colors.primary}10` : 'transparent',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: isUnlocked ? 'pointer' : 'not-allowed',
                              marginBottom: '0.25rem',
                              opacity: isUnlocked ? 1 : 0.5,
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircle size={14} color={theme.colors.primary} />
                            ) : isUnlocked ? (
                              <div
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '50%',
                                  border: `2px solid ${theme.colors.border}`,
                                }}
                              />
                            ) : (
                              <Lock size={14} color={theme.colors.textSecondary} />
                            )}
                            <span
                              style={{
                                flex: 1,
                                textAlign: 'left',
                                color: isCompleted ? theme.colors.textSecondary : theme.colors.text,
                                fontSize: '0.875rem',
                              }}
                            >
                              {mission.title}
                            </span>
                            {isUnlocked && <ChevronRight size={14} color={theme.colors.textSecondary} />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
