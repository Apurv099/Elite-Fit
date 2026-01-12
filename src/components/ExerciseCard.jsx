import React, { useState } from 'react'

export default function ExerciseCard(props) {
    const { exercise, i } = props

    const [setsCompleted, setSetsComplete] = useState(0)

    function handleSetIncrement() {
        setSetsComplete((setsCompleted + 1) % 6)
    }

    return (
        <div className='exercise-card'>
            <div className='exercise-card__header'>
                <div className='exercise-card__title-wrapper'>
                    <h4 className='exercise-card__number'>
                        0{i + 1}
                    </h4>
                    <h2 className='exercise-card__name'>{exercise.name.replaceAll("_", " ")}</h2>
                    <p className='exercise-card__type'>{exercise.type}</p>
                </div>
            </div>
            <div className='exercise-card__muscles'>
                <h3 className='exercise-card__muscles-label'>Muscle Groups</h3>
                <p className='exercise-card__muscles-value'>{exercise.muscles.join(' & ')}</p>
            </div>

            <div className='exercise-card__description'>
                {exercise.description.split('___').map((val, idx) => {
                    return (
                        <div key={idx} className='exercise-card__description-text'>
                            {val}
                        </div>
                    )
                })}
            </div>

            <div className='exercise-card__stats'>
                {['reps', 'rest', 'tempo'].map(info => {
                    return (
                        <div key={info} className='exercise-card__stat'>
                            <h3 className='exercise-card__stat-label'>{info === 'reps' ? `${exercise.unit}` : info}</h3>
                            <p className='exercise-card__stat-value'>{exercise[info]}</p>
                        </div>
                    )
                })}
                <button onClick={handleSetIncrement} className='exercise-card__sets-button'>
                    <h3 className='exercise-card__sets-label'>Sets completed</h3>
                    <p className='exercise-card__sets-value'>{setsCompleted} / 5</p>
                </button>
            </div>
        </div>
    )
}
