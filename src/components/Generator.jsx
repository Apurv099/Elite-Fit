import React, { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/elite'
import Button from './Button'

function Header(props) {
    const { index, title, description } = props
    return (
        <div className='generator__header'>
            <div className='generator__header-wrapper'>
                <p className='generator__header-number'>{index}</p>
                <h4 className='generator__header-title'>{title}</h4>
            </div>
            <p className='generator__header-description'>{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const { muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout } = props
    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
        const handleOutsideClick=(e)=>{
            if(!e.target.closest('.muscle-selector')){
                setShowModal(false)
            }
        }
        if(showModal){
         document.addEventListener("click",handleOutsideClick)
        }
        return ()=>{
            document.removeEventListener("click",handleOutsideClick)
        }
    },[showModal])

    // let showModal = false

    function toggleModal() {
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }

    }

    return (
        <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
            <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."} />
            <div className='generator__grid'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setMuscles([])
                            setPoison(type)
                        }} className={'generator__grid-button' + (type === poison ? ' generator__grid-button--active' : '')} key={typeIndex}>
                            <p>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihilation."} />
            <div className='muscle-selector'>
                <button onClick={toggleModal} className='muscle-selector__button'>
                    <p>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                    <i className="fa-solid muscle-selector__icon fa-caret-down"></i>
                </button>
                {showModal && (
                    <div className='muscle-selector__dropdown'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'muscle-selector__option' + (muscles.includes(muscleGroup) ? ' muscle-selector__option--active' : '')}>
                                    <p>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
            <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."} />
            <div className='goals__grid'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }} className={'goals__button' + (scheme === goal ? ' goals__button--active' : '')} key={schemeIndex}>
                            <p>{scheme.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}></Button>
        </SectionWrapper>

    )
}
