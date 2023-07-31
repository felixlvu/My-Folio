##
## EPITECH PROJECT, 2022
## makefile
## File description:
## makefile
##

NAME = 42sh

SRC = ./src/main.c \
	  ./src/main_loop.c \
	  ./src/init_42sh/create_new_env.c \
	  ./src/init_42sh/find_elements.c \
	  ./src/init_42sh/init_path.c \
	  ./src/builtins/command_cd.c \
	  ./src/builtins/command_setenv.c \
	  ./src/builtins/builtins.c \
	  ./src/builtins/event_env.c \
	  ./src/builtins/copy_array.c \
	  ./src/builtins/event_echo.c \
	  ./src/pipes/fill_args_pipe.c \
	  ./src/pipes/search_pipe.c \
	  ./src/pipes/exe_pipe.c \
	  ./src/find_command/all_command.c \
	  ./src/find_command/execute_child.c \
	  ./src/find_command/search_other.c \
	  ./src/find_command/search_env_var.c \
	  ./src/my_lib/my_strnncat.c \
	  ./src/my_lib/my_str_to_word_array.c \
	  ./src/my_lib/trim.c \
	  ./src/child_command/execute_command.c \
	  ./src/child_command/child_process.c \
	  ./src/child_command/find_command_path.c \
	  ./src/separators/separator.c \
	  ./src/separators/exe_logic_and.c \
	  ./src/separators/exe_logic_or.c \
	  ./src/backslash/backslash.c \
	  ./src/backslash/str_clean.c \
	  ./src/backslash/str_to_array.c \
	  ./src/redirections/search_left_direc.c \
	  ./src/redirections/search_right_direc.c \
	  ./src/redirections/exe_right_direc.c \
	  ./src/redirections/exe_left_direc.c \
	  ./src/alias/alias.c \
	  ./src/alias/unalias.c \
	  ./src/alias/searching_line_ua.c \
	  ./src/alias/alias_list.c \
	  ./src/alias/exe_alias.c \
	  ./src/line_edition/line_main.c	\
      ./src/line_edition/gestion_lines.c \
	  ./src/line_edition/append_char.c \
	  ./src/line_edition/history.c \
	  ./src/line_edition/welcome_msg.c \
	  ./src/line_edition/special_key.c \
	  ./src/line_edition/special_history.c \

OBJ = $(SRC:.c=.o)

CFLAGS = -I ./include/ -lncurses -W -Wall -Wextra -g3

%.o: %.c
	@gcc -c $< -o $@ $(CFLAGS)

$(NAME): $(OBJ)
	@gcc $(OBJ) -o $(NAME) $(CFLAGS)

all: $(NAME)

clean:
	@rm -f $(OBJ)

fclean: clean
	@rm -f $(NAME)

re: fclean all

debug: CFLAGS += -g3
debug: $(OBJ)
	@gcc -o $(NAME) $(OBJ) $(CFLAGS) -g3

.PHONY : all clean debug fclean re
