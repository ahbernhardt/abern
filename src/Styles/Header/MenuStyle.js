//=================================================
// Menu
//=================================================
import styled from "styled-components";
// import {colors, footerVar} from './variables'


export const MenuToggle = styled.div`
    .icon-menu {
        display: none;
    }
    
    .modal-adv-1 {
        background-image: url(../../img/bg/bg-half-ring-center-modal.svg);
        background-color: $body_background_color;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left top;
        min-width: 320px;

        .modal-dialog {
            &.modal-full {
                max-width: 100%;
                margin: 0;
            }
        
            .modal-content {
                border: 0;
                min-height: 100vh;
            }

            .modal-header {
                position: absolute;
                z-index: 99;
                width: 100%;
                border: 0;
                padding-top: $header_padding_t;
                padding-bottom: $header_padding_b;
                
                .close {
                    padding: 1rem;
                    margin: 0 -1rem 0 auto;
                }
            }
            
            .input-group {
                border-bottom: 1px solid $input_border_secondary_color;
                
                &.border-bottom {
                    border-bottom: 1px solid $input_border_secondary_color !important;
                }

                .form-control {
                    margin-bottom: -1px;
                }
            }
            
            .modal-footer {
                border: 0;
            }
            
            .modal {
                &-header, &-body, &-footer {
                    padding-left: 0;
                    padding-right: 0;
                }
            }
        }
        
        &.modal-body-pr {
            .modal-body {
                padding-right: 7.31rem;
            }  
        }
    }
`
export const MenuButton = styled.button`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 0.81rem;
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.text};
    border: none;  
    background-color: transparent; 
     
    &:focus {
        outline: 0;
    }
    
    i{
        margin-left: 3px;
    }
`

export const Menu = styled.div`
    margin-bottom: -0.88rem;
`

export const ModalPage = styled.div`
    margin-bottom: -0.88rem;
    
    &.modal-adv-1 {
        background-image: url(../../img/bg/bg-half-ring-center-modal.svg);
        background-color: $body_background_color;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left top;
        min-width: 320px;

        .modal-dialog {
            &.modal-full {
                max-width: 100%;
                margin: 0;
            }
        
            .modal-content {
                border: 0;
                min-height: 100vh;
            }

            .modal-header {
                position: absolute;
                z-index: 99;
                width: 100%;
                border: 0;
                padding-top: $header_padding_t;
                padding-bottom: $header_padding_b;
                
                .close {
                    padding: 1rem;
                    margin: 0 -1rem 0 auto;
                }
            }
            
            .input-group {
                border-bottom: 1px solid $input_border_secondary_color;
                
                &.border-bottom {
                    border-bottom: 1px solid $input_border_secondary_color !important;
                }

                .form-control {
                    margin-bottom: -1px;
                }
            }
            
            .modal-footer {
                border: 0;
            }
            
            .modal {
                &-header, &-body, &-footer {
                    padding-left: 0;
                    padding-right: 0;
                }
            }
        }
        
        &.modal-body-pr {
            .modal-body {
                padding-right: 7.31rem;
                
                @media #{$media_lg} {
                    padding-right: 3.65rem;
                }
                
                @media #{$media_sm} {
                    padding-right: 0;
                }
            }  
        }
    }
`

